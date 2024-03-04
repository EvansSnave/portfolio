import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  apiUrl: string='http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    const path: string = this.apiUrl + '/books';
    return this.httpClient.get<Item[]>(path);
  }
}
