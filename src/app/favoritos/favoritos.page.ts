import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage{
 
  termoPesquisa: string ="";
  resultadosPesquisa: any[]=[];

  constructor(private http: HttpClient) {}

  pesquisar() {
    // Chamada HTTP para a rota de pesquisa no servidor Node.js
    this.http.get<any[]>(`http://localhost:3000/restaurantes?termo=${this.termoPesquisa}`)
      .subscribe((results) => {
        this.resultadosPesquisa = results;
      });
  }
 
}
