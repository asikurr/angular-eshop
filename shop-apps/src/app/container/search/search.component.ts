import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText = '';

  @Output() inputSearchText = new EventEmitter<string>();

  getSearchText(){
    this.inputSearchText.emit(this.searchText);
    console.log(this.searchText);
    
  }
}
