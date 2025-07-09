export interface FileDocument {
  _id: string;
  name: string;
  type: "image" | "folder" | "link" | "document" | "pdf" | "note";
  size: number;
  mimetype?: string;
  uploadDate: string; // ISO date string
  createdAt: string;
  updatedAt: string;
  userId: string;
  folderId?: string;
  path: string;
  isHidden: boolean;
  isFavorite: boolean;
  tags?: string[];
}

export interface CalendarFile {
  _id: string;
  name: string;
  type: FileDocument["type"];
  uploadDate: string;
  displayDate: string; // Formatted date for display
  size: number;
  path: string;
}

export interface CalendarDay {
  date: number;
  fullDate: string; // YYYY-MM-DD format
  hasFiles: boolean;
  fileCount: number;
}

export interface CalendarMonth {
  year: number;
  month: number; // 0-11
  monthName: string;
  days: CalendarDay[];
}

export interface CalendarAPIResponse {
  success: boolean;
  data: {
    files: CalendarFile[];
    calendar: CalendarMonth;
  };
  message?: string;
}

export interface CalendarFilesResponse {
  success: boolean;
  data: CalendarFile[];
  total: number;
  message?: string;
}
