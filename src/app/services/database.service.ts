import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:3000'; // URL da API do seu banco de dados

  constructor(private http: HttpClient) { }

  searchByName(name: string): Observable<any[]> {
    const url = `${this.apiUrl}/search?name=${name}`; // Endpoint da API para realizar a pesquisa

    return this.http.get<any[]>(url);
  }
}