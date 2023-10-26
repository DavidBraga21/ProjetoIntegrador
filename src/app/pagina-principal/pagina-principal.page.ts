import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage {

  data: string[] = []; // Inicialize com um array vazio
  limite: number = 50; // Defina o limite de itens a carregar

  constructor() {
    this.loadData(null); // Carregue os primeiros dados
  }

  loadData(event:any) {
    // Simule uma requisição assíncrona para buscar mais dados
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        if (this.data.length < this.limite) {
          this.data.push(`Item ${this.data.length + 1}`);
        }
      }

      if (event) {
        event.target.complete(); // Complete o evento de rolagem infinita
      }

      if (this.data.length >= this.limite) {
        event.target.disabled = true; // Desabilite o evento quando o limite for atingido
      }
    }, 1000); // Tempo de simulação de requisição
  }
}
