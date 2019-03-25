import { Component, OnInit } from '@angular/core';

import { Filter } from './filter';
import { FILTER } from './mock-filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public filter = {
    Show: false,
    areaShow: false,
    priceShow: false,
    typeShow: false,
    moreShow: false
  };

  filt = FILTER;
  selectedFilter: Filter;

  constructor() { }

  ngOnInit() { }

  onSelect(item: Filter): void {
    this.selectedFilter = item;
    if (this.selectedFilter.id === 1) {
      this.filter.Show = true;
      this.filter.areaShow = true;
      this.filter.priceShow = false;
      this.filter.typeShow = false;
      this.filter.moreShow = false;
    } else if (this.selectedFilter.id === 2) {
      this.filter.Show = true;
      this.filter.areaShow = false;
      this.filter.priceShow = true;
      this.filter.typeShow = false;
      this.filter.moreShow = false;
    } else if (this.selectedFilter.id === 3) {
      this.filter.Show = true;
      this.filter.areaShow = false;
      this.filter.priceShow = false;
      this.filter.typeShow = true;
      this.filter.moreShow = false;
    } else if (this.selectedFilter.id === 4) {
      this.filter.Show = true;
      this.filter.areaShow = false;
      this.filter.priceShow = false;
      this.filter.typeShow = false;
      this.filter.moreShow = true;
    }
  }

}
