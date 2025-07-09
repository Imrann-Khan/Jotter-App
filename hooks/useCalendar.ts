import { useState, useEffect, useCallback } from "react";
import { calendarService, APIError } from "../services/calendarService";
import { CalendarFile, CalendarMonth } from "../types/calendar";

interface UseCalendarState {
  calendar: CalendarMonth | null;
  files: CalendarFile[];
  selectedDate: string | null; 
  loading: boolean;
  error: string | null;
  refreshing: boolean;
}

interface UseCalendarReturn extends UseCalendarState {
  loadCalendarMonth: (year: number, month: number) => Promise<void>;
  loadFilesByDate: (date: string) => Promise<void>;
  selectDate: (date: string) => void;
  refresh: () => Promise<void>;
  clearError: () => void;
}

export const useCalendar = (
  initialYear?: number,
  initialMonth?: number,
): UseCalendarReturn => {
  const currentDate = new Date();
  const defaultYear = initialYear ?? currentDate.getFullYear();
  const defaultMonth = initialMonth ?? currentDate.getMonth();

  const [state, setState] = useState<UseCalendarState>({
    calendar: null,
    files: [],
    selectedDate: null,
    loading: false,
    error: null,
    refreshing: false,
  });

  const updateState = useCallback((updates: Partial<UseCalendarState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  }, []);

  const loadCalendarMonth = useCallback(
    async (year: number, month: number) => {
      try {
        updateState({ loading: true, error: null });

        const response = await calendarService.getCalendarMonth(year, month);

        if (response.success) {
          updateState({
            calendar: response.data.calendar,
            files: response.data.files,
            loading: false,
          });
        } else {
          updateState({
            error: response.message || "Failed to load calendar",
            loading: false,
          });
        }
      } catch (error) {
        const errorMessage =
          error instanceof APIError ? error.message : "Network error occurred";

        updateState({
          error: errorMessage,
          loading: false,
        });
      }
    },
    [updateState],
  );

  const loadFilesByDate = useCallback(
    async (date: string) => {
      try {
        updateState({ loading: true, error: null });

        const response = await calendarService.getFilesByDate(date);

        if (response.success) {
          updateState({
            files: response.data,
            selectedDate: date,
            loading: false,
          });
        } else {
          updateState({
            error: response.message || "Failed to load files",
            loading: false,
          });
        }
      } catch (error) {
        const errorMessage =
          error instanceof APIError ? error.message : "Network error occurred";

        updateState({
          error: errorMessage,
          loading: false,
        });
      }
    },
    [updateState],
  );

  const selectDate = useCallback(
    (date: string) => {
      updateState({ selectedDate: date });
      loadFilesByDate(date);
    },
    [loadFilesByDate, updateState],
  );

  const refresh = useCallback(async () => {
    if (state.calendar) {
      updateState({ refreshing: true });
      await loadCalendarMonth(state.calendar.year, state.calendar.month);
      updateState({ refreshing: false });
    }
  }, [state.calendar, loadCalendarMonth, updateState]);

  const clearError = useCallback(() => {
    updateState({ error: null });
  }, [updateState]);

  // Load initial calendar data
  useEffect(() => {
    loadCalendarMonth(defaultYear, defaultMonth);
  }, [defaultYear, defaultMonth, loadCalendarMonth]);

  return {
    ...state,
    loadCalendarMonth,
    loadFilesByDate,
    selectDate,
    refresh,
    clearError,
  };
};
