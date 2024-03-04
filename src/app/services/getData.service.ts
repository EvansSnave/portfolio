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
    const path: string = this.apiUrl + '/books';
    return this.httpClient.get<Item[]>(path);
  }

  postData(data: object): Observable<Item> {
    const path: string = this.apiUrl + '/books';
    return this.httpClient.post<Item>(path, data);
  }

  formatParams(data: Item): { book: Item } {
    return {
      book: {
        title: data.title,
        price: data.price,
        year: data.year,
        author: data.author,
        rating: data.rating,
        description: data.description,
        user_id: data.user_id,
        image_url: data.image_url
      }
    }
  }
}
