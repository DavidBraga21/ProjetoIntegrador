import { Component, OnInit } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {

  items: any=[];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    ;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${i + 1}`);
    }
  }

}
