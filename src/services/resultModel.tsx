export interface Result<T> {
  data: T | null;
  success: boolean;
  message: string;
}
