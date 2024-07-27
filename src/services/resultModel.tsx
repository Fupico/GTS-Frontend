export interface ResponseDto<T> {
  data: T | null;
  IsSuccessful: boolean; //ekrana mesajı göster gösterme
  status: number; // hata kodu
  errors: ErrorDto | null;
}

export interface ErrorDto {
  errors: string[];
  isShow: boolean;
}

export interface NoDataDto {
  message: string;
}
