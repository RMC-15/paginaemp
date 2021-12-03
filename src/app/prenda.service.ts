/** Esta clase maneja la conexion con la api para obtener el catalogo de 
 * prendas 
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {

  private baseURL = "http://10.60.63.100:5000/v1/item/?query=" 

  constructor(private httpClient: HttpClient) { }

  public getItems(query: String): Observable<any> {
    return this.httpClient.get(this.baseURL + query)
  }
}
