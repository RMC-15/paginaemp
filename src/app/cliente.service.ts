import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client_data';
import { TEST_API_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = TEST_API_URL 

  constructor(private httpClient: HttpClient) { }

  /** Retorna una lista de clientes que coincidan con el termino de busqueda */
  public searchClient(query: String): Observable<any> {
    let endpoint = this.baseURL + '/client_search?query=' + query
    return this.httpClient.get(endpoint)
  }

  public addClient(client: Client): Observable<any> {
    const endpoint = this.baseURL + 'client'
    return this.httpClient.post(endpoint, client)
  }
}
