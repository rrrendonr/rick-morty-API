import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() searchName = new EventEmitter<string>();

  search(name: string) {
    this.searchName.emit(name)
  }
}
