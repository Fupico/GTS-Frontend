import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
// import {
//   getAuth,
//   removeAuth,
//   setAuth,
// } from "../../app/modules/auth/core/AuthHelpers";
// import { AuthModel } from "../../app/modules/auth/core/_models";

export class RequestManager {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  private getRequestConfig(): AxiosRequestConfig {
    const headers: any = {};
    // const auth = getAuth();
    // if (auth && auth.api_token) {
    //   headers.Authorization = `Bearer ${auth.api_token}`;
    // }

    return {
      headers,
    };
  }

  private handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private handleError(error: any): Promise<never> {
    throw error;
  }

  get<T>(url: string): Promise<T> {
    ////debugger
    const requestConfig = this.getRequestConfig();
    return this.axiosInstance
      .get<T>(url, requestConfig)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  post<T>(url: string, data: any): Promise<T> {
    const requestConfig = this.getRequestConfig();
    return this.axiosInstance
      .post<T>(url, data, requestConfig)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  put<T>(url: string, data: any): Promise<T> {
    const requestConfig = this.getRequestConfig();
    return this.axiosInstance
      .put<T>(url, data, requestConfig)
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  delete<T>(url: string): Promise<T> {
    const requestConfig = this.getRequestConfig();
    return this.axiosInstance
      .delete<T>(url, requestConfig)
      .then(this.handleResponse)
      .catch(this.handleError);
  }
}

// // Kullanım örneği
// const requestManager = new RequestManager()

// // Token ayarla
// requestManager.setToken('your_token_here')

// // GET isteği
// requestManager
//   .get<{message: string}>('/api/endpoint')
//   .then((response) => {
//     console.log(response.message)
//   })
//   .catch((error) => {
//     console.error(error.message)
//   })

// // POST isteği
// const postData = {name: 'John Doe', age: 30}
// requestManager
//   .post('/api/endpoint', postData)
//   .then((response) => {
//     console.log('Yanıt:', response)
//   })
//   .catch((error) => {
//     console.error('Hata:', error.message)
//   })

// // Diğer istekler için de benzer şekilde kullanabilirsiniz (put, delete)
