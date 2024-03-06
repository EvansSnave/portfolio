import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  apiUrl: string ='http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    const path: string = this.apiUrl + '/books';
    return this.httpClient.get<Item[]>(path);
  }

  postData(data: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('book[image]', data);
    const request = new HttpRequest('POST', `${this.apiUrl}/books`, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.httpClient.request(request);
  }
}
