import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiOptions } from './api-options';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static API_TOKEN_KEY = 'AUTH_TOKEN';

  constructor(private http: HttpClient) {}

  get<T>(url: string, options?: ApiOptions): Observable<T> {
    return this.http.get<T>(url, options);
  }

  post<T>(url: string, body: any, options?: ApiOptions): Observable<T> {
    return this.http.post<T>(url, body, options);
  }

  patch<T>(url: string, body: any, options?: ApiOptions): Observable<T> {
    return this.http.patch<T>(url, body, options);
  }

  put<T>(url: string, body: any, options?: ApiOptions): Observable<T> {
    return this.http.put<T>(url, body, options);
  }

  delete<T>(url: string, options?: ApiOptions): Observable<T> {
    return this.http.delete<T>(url, options);
  }
}
