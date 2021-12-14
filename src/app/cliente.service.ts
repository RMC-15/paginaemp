import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = "http://10.60.63.100:5000/v1/" 

  constructor(private httpClient: HttpClient) { }

  /** Retorna una lista de clientes que coincidan con el termino de busqueda */
  public searchClient(query: String): Observable<any> {
    let endpoint = this.baseURL + '/client_search?query=' + query
    return this.httpClient.get(endpoint)
  }

}
