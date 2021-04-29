import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datos } from 'src/app/interfaces/datos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:80";

  constructor(
    private httpClient: HttpClient
  ) { }

  readData(): Observable<Datos[]>{
    return this.httpClient.get<Datos[]>(`${this.PHP_API_SERVER}/dataPHP/traerData.php`);
  }

  createData(data: Datos): Observable<Datos>{
    return this.httpClient.post<Datos>(`${this.PHP_API_SERVER}/dataPHP/agregarData.php`, data);
  }
}
