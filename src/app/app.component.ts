import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Configurações', url: '/folder/pagina-principal', icon: 'cog' },
    { title: 'Historico', url: '/folder/outbox', icon: 'receipt' },
    { title: 'Sair', url: '/folder/favorites', icon: 'log-out' },
 
  ];
  public labels = [];
  constructor() {}
}
