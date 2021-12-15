import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TEST_API_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class CatIdeService {

  private baseURL = TEST_API_URL

  constructor(private httpClient: HttpClient) { }

  public getItems() : Observable<any> {
    return this.httpClient.get(this.baseURL + 'cat_ide')
  }
}
