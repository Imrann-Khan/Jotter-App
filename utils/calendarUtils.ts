import { CalendarDay, CalendarMonth } from "../types/calendar";

export class CalendarUtils {
  static formatDate(date: Date): string {
    return date.toISOString().split("T")[0]; // YYYY-MM-DD format
  }

  static formatDisplayDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  static getMonthName(month: number): string {
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
    return monthNames[month];
  }

  static getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  static getFirstDayOfMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
  }

  static generateCalendarDays(year: number, month: number): CalendarDay[] {
    const daysInMonth = this.getDaysInMonth(year, month);
    const firstDay = this.getFirstDayOfMonth(year, month);
    const days: CalendarDay[] = [];

    // Add previous month's trailing days
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = this.getDaysInMonth(prevYear, prevMonth);

    for (let i = firstDay - 1; i >= 0; i--) {
      const date = daysInPrevMonth - i;
      days.push({
        date,
        fullDate: this.formatDate(new Date(prevYear, prevMonth, date)),
        hasFiles: false,
        fileCount: 0,
      });
    }

    // Add current month's days
    for (let date = 1; date <= daysInMonth; date++) {
      days.push({
        date,
        fullDate: this.formatDate(new Date(year, month, date)),
        hasFiles: false,
        fileCount: 0,
      });
    }

    // Add next month's leading days to fill the calendar grid
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    for (let date = 1; date <= remainingDays; date++) {
      days.push({
        date,
        fullDate: this.formatDate(new Date(nextYear, nextMonth, date)),
        hasFiles: false,
        fileCount: 0,
      });
    }

    return days;
  }

  static isToday(dateString: string): boolean {
    const today = new Date();
    const compareDate = new Date(dateString);

    return (
      today.getFullYear() === compareDate.getFullYear() &&
      today.getMonth() === compareDate.getMonth() &&
      today.getDate() === compareDate.getDate()
    );
  }

  static isSameMonth(dateString: string, year: number, month: number): boolean {
    const date = new Date(dateString);
    return date.getFullYear() === year && date.getMonth() === month;
  }

  static getFileTypeIcon(type: string): string {
    const iconMap: Record<string, string> = {
      image: "🖼️",
      folder: "📁",
      document: "📄",
      pdf: "📕",
      link: "🔗",
      note: "📝",
    };
    return iconMap[type] || "📄";
  }

  static formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  static groupFilesByDate(files: any[]): Record<string, any[]> {
    return files.reduce((groups, file) => {
      const date = file.uploadDate.split("T")[0]; // Get YYYY-MM-DD part
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(file);
      return groups;
    }, {});
  }

  static sortFilesByDate(files: any[], ascending: boolean = false): any[] {
    return [...files].sort((a, b) => {
      const dateA = new Date(a.uploadDate).getTime();
      const dateB = new Date(b.uploadDate).getTime();
      return ascending ? dateA - dateB : dateB - dateA;
    });
  }
}
