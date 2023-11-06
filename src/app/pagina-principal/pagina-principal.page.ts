import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {

  data: string[] = [];
  limite: number = 5;
  items: any[] = [];
  pageNumber = 1;
  totalItemsLoaded = 0;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll?: IonInfiniteScroll;

  constructor(private http: HttpClient) {}

  getStars(nota: number): string[] {
    const fullStars = Math.floor(nota);
    const halfStar = nota - fullStars >= 0.5;
    const starsArray = Array(fullStars).fill('star');
    if (halfStar) {
      starsArray.push('star-half');
    }
    return starsArray;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const apiUrl = 'http://localhost:3000/restaurantes'; // Substitua pela URL da API real
    const params = {
      limit: 5, // Carrega 5 itens por vez
    };
    this.http.get(apiUrl).subscribe((data: any) => {
      this.items = data;
    });
  }

  loadMoreData(event: any) {
    // Simula um atraso de 1 segundo para carregar mais dados
    setTimeout(() => {
      // Chame a API para carregar mais dados
      this.loadData();

      // Conclua o evento de carregamento
      event.target.complete();

      // Verifique se atingiu o limite máximo de dados
      if (this.items.length >= 100) {
        event.target.disabled = true;
      }
    }, 1000);
  }

 
}
