import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage  implements OnInit {
  results: any[] =[];
  
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit() {
      this.results = this.route.snapshot.data['results'];
    }
  }
