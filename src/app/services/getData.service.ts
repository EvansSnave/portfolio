import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  apiUrl: string ='http://backend:4000';
  private itemsSubject = new BehaviorSubject<Item[]>([]);
  public items$ = this.itemsSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`${this.apiUrl}/books`);
  };

  postData(data: FormData): Observable<object> {
    return this.httpClient.post<object>(`${this.apiUrl}/books`, data).pipe(
      switchMap(() => this.getItems()), 
      tap((items) => this.itemsSubject.next(items))
    );
  }
}
