import {
  CalendarAPIResponse,
  CalendarFilesResponse,
  CalendarFile,
} from "../types/calendar";
import { CalendarUtils } from "../utils/calendarUtils";

// Base API URL - you can set this in environment variables
const API_BASE_URL = __DEV__
  ? "http://localhost:3000/api"
  : "https://your-production-api.com/api";

// Mock data for development
const mockFiles: CalendarFile[] = [
  {
    _id: "1",
    name: "image.123",
    type: "image",
    size: 2048576,
    uploadDate: "2025-01-18T10:30:00Z",
    url: "",
    tags: [],
  },
  {
    _id: "2",
    name: "image.123",
    type: "image",
    size: 1536000,
    uploadDate: "2025-01-18T14:20:00Z",
    url: "",
    tags: [],
  },
  {
    _id: "3",
    name: "image.123",
    type: "image",
    size: 3072000,
    uploadDate: "2025-01-18T16:45:00Z",
    url: "",
    tags: [],
  },
  {
    _id: "4",
    name: "Folder.1",
    type: "folder",
    size: 0,
    uploadDate: "2025-01-18T09:15:00Z",
    url: "",
    tags: [],
  },
  {
    _id: "5",
    name: "image.123",
    type: "image",
    size: 2560000,
    uploadDate: "2025-01-18T11:30:00Z",
    url: "",
    tags: [],
  },
  {
    _id: "6",
    name: "link .1",
    type: "link",
    size: 0,
    uploadDate: "2025-01-18T13:00:00Z",
    url: "",
    tags: [],
  },
  {
    _id: "7",
    name: "docoment.1",
    type: "document",
    size: 1024000,
    uploadDate: "2025-01-18T15:30:00Z",
    url: "",
    tags: [],
  },
  {
    _id: "8",
    name: "image.123",
    type: "image",
    size: 1792000,
    uploadDate: "2025-01-18T12:45:00Z",
    url: "",
    tags: [],
  },
  {
    _id: "9",
    name: "image.123",
    type: "image",
    size: 2304000,
    uploadDate: "2025-01-18T17:20:00Z",
    url: "",
    tags: [],
  },
];

interface APIError {
  message: string;
  status: number;
}

class CalendarService {
  private async makeRequest<T>(
    endpoint: string,
    options?: RequestInit,
  ): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
          // 'Authorization': `Bearer ${getAuthToken()}`,
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new APIError({
          message: `HTTP error! status: ${response.status}`,
          status: response.status,
        });
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Request failed:", error);
      throw error;
    }
  }

  // Get calendar data for a specific month
  async getCalendarMonth(
    year: number,
    month: number,
  ): Promise<CalendarAPIResponse> {
    // Return mock data in development
    if (__DEV__) {
      const calendarDays = CalendarUtils.generateCalendarDays(year, month);

      return {
        success: true,
        message: "Calendar data retrieved successfully",
        data: {
          calendar: {
            year,
            month,
            days: calendarDays,
          },
          files: mockFiles,
        },
      };
    }

    return this.makeRequest<CalendarAPIResponse>(`/calendar/${year}/${month}`);
  }

  // Get files for a specific date
  async getFilesByDate(date: string): Promise<CalendarFilesResponse> {
    // Return mock data in development
    if (__DEV__) {
      return {
        success: true,
        message: "Files retrieved successfully",
        data: mockFiles,
      };
    }

    return this.makeRequest<CalendarFilesResponse>(
      `/calendar/files?date=${date}`,
    );
  }

  // Get files for a date range
  async getFilesByDateRange(
    startDate: string,
    endDate: string,
  ): Promise<CalendarFilesResponse> {
    // Return mock data in development
    if (__DEV__) {
      return {
        success: true,
        message: "Files retrieved successfully",
        data: mockFiles,
      };
    }

    return this.makeRequest<CalendarFilesResponse>(
      `/calendar/files?startDate=${startDate}&endDate=${endDate}`,
    );
  }

  // Search files by name and date
  async searchFiles(
    query: string,
    date?: string,
  ): Promise<CalendarFilesResponse> {
    // Return mock data in development
    if (__DEV__) {
      const filteredFiles = mockFiles.filter((file) =>
        file.name.toLowerCase().includes(query.toLowerCase()),
      );

      return {
        success: true,
        message: "Search completed successfully",
        data: filteredFiles,
      };
    }

    const params = new URLSearchParams({ query });
    if (date) params.append("date", date);

    return this.makeRequest<CalendarFilesResponse>(
      `/calendar/search?${params.toString()}`,
    );
  }
}

export const calendarService = new CalendarService();

// Error class for API errors
class APIError extends Error {
  status: number;

  constructor({ message, status }: { message: string; status: number }) {
    super(message);
    this.name = "APIError";
    this.status = status;
  }
}

export { APIError };
