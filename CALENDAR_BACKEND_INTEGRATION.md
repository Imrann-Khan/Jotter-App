# Calendar Backend Integration Guide

This guide explains how to integrate the calendar frontend with your MongoDB, Express.js, and Node.js backend.

## Backend API Endpoints Required

### 1. Get Calendar Month Data

```
GET /api/calendar/:year/:month
```

**Response:**

```json
{
  "success": true,
  "data": {
    "calendar": {
      "year": 2025,
      "month": 0,
      "monthName": "January",
      "days": [
        {
          "date": 1,
          "fullDate": "2025-01-01",
          "hasFiles": true,
          "fileCount": 5
        }
      ]
    },
    "files": []
  }
}
```

### 2. Get Files by Date

```
GET /api/calendar/files?date=2025-01-31
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "_id": "64f1e2b3c9a8d5e6f7890123",
      "name": "vacation_photo.jpg",
      "type": "image",
      "uploadDate": "2025-01-31T10:30:00.000Z",
      "displayDate": "Jan 31, 2025",
      "size": 2048576,
      "path": "/uploads/images/vacation_photo.jpg"
    }
  ],
  "total": 15
}
```

### 3. Get Files by Date Range

```
GET /api/calendar/files?startDate=2025-01-01&endDate=2025-01-31
```

### 4. Search Files

```
GET /api/calendar/search?query=vacation&date=2025-01-31
```

## MongoDB Schema Examples

### File Document Schema

```javascript
const fileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ["image", "folder", "link", "document", "pdf", "note"],
      required: true,
    },
    size: { type: Number, required: true },
    mimetype: String,
    uploadDate: { type: Date, default: Date.now },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    folderId: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" },
    path: { type: String, required: true },
    isHidden: { type: Boolean, default: false },
    isFavorite: { type: Boolean, default: false },
    tags: [String],
  },
  {
    timestamps: true,
  },
);
```

## Express.js Route Examples

### Calendar Routes (routes/calendar.js)

```javascript
const express = require("express");
const router = express.Router();
const File = require("../models/File");

// Get calendar month data
router.get("/:year/:month", async (req, res) => {
  try {
    const { year, month } = req.params;
    const userId = req.user._id; // From auth middleware

    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, parseInt(month) + 1, 0);

    // Get files for the month
    const files = await File.find({
      userId,
      uploadDate: {
        $gte: startDate,
        $lte: endDate,
      },
      isHidden: false,
    }).sort({ uploadDate: -1 });

    // Generate calendar days with file counts
    const calendar = generateCalendarMonth(year, month, files);

    res.json({
      success: true,
      data: {
        calendar,
        files: files.map(formatFileForCalendar),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get files by specific date
router.get("/files", async (req, res) => {
  try {
    const { date, startDate, endDate } = req.query;
    const userId = req.user._id;

    let query = { userId, isHidden: false };

    if (date) {
      const targetDate = new Date(date);
      const nextDay = new Date(targetDate);
      nextDay.setDate(nextDay.getDate() + 1);

      query.uploadDate = {
        $gte: targetDate,
        $lt: nextDay,
      };
    } else if (startDate && endDate) {
      query.uploadDate = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const files = await File.find(query).sort({ uploadDate: -1 }).limit(50);

    res.json({
      success: true,
      data: files.map(formatFileForCalendar),
      total: files.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Helper function to format file for calendar
function formatFileForCalendar(file) {
  return {
    _id: file._id,
    name: file.name,
    type: file.type,
    uploadDate: file.uploadDate.toISOString(),
    displayDate: file.uploadDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    size: file.size,
    path: file.path,
  };
}

// Helper function to generate calendar month
function generateCalendarMonth(year, month, files) {
  const daysInMonth = new Date(year, parseInt(month) + 1, 0).getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Group files by date
  const filesByDate = {};
  files.forEach((file) => {
    const dateKey = file.uploadDate.toISOString().split("T")[0];
    if (!filesByDate[dateKey]) {
      filesByDate[dateKey] = [];
    }
    filesByDate[dateKey].push(file);
  });

  // Generate days array
  const days = [];
  for (let date = 1; date <= daysInMonth; date++) {
    const fullDate = `${year}-${String(parseInt(month) + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
    const dayFiles = filesByDate[fullDate] || [];

    days.push({
      date,
      fullDate,
      hasFiles: dayFiles.length > 0,
      fileCount: dayFiles.length,
    });
  }

  return {
    year: parseInt(year),
    month: parseInt(month),
    monthName: monthNames[parseInt(month)],
    days,
  };
}

module.exports = router;
```

## Frontend Configuration

### Environment Variables

Create a `.env` file:

```
API_BASE_URL=http://localhost:3000/api
```

### API Service Configuration

Update `services/calendarService.ts`:

```typescript
const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000/api";
```

## Authentication Integration

Add authentication token to API requests:

```typescript
// In calendarService.ts
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${await getAuthToken()}`, // Your auth token function
  ...options?.headers,
}
```

## Error Handling

The frontend includes comprehensive error handling for:

- Network failures
- API errors
- Loading states
- Empty states

## File Upload Integration

To connect with file uploads, dispatch calendar refresh after successful upload:

```typescript
// After successful file upload
const { refresh } = useCalendar();
await refresh();
```

## Optimization Tips

1. **Pagination**: Implement pagination for large file lists
2. **Caching**: Cache calendar data to reduce API calls
3. **Debouncing**: Debounce search requests
4. **Lazy Loading**: Load file details on demand
5. **Offline Support**: Store recent calendar data locally

This structure provides a complete backend integration foundation for your calendar feature.
