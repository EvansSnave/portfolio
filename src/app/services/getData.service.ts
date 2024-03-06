import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  apiUrl: string ='http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`${this.apiUrl}/books`);
  }

  postData(data: FormData): Observable<object> {
    return this.httpClient.post<object>(`${this.apiUrl}/books`, data);
  }
}
