import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText = '';

  @Output() inputSearchText = new EventEmitter<string>();

  @ViewChild('searchInput') inputSearchEl : ElementRef;

  // getSearchText(){
  //   this.inputSearchText.emit(this.searchText);
  //   console.log(this.searchText);
    
  // }

  setSearchText(){
   // this.searchText = value.target.value;
   // console.log(value.value);
   this.searchText = this.inputSearchEl.nativeElement.value;
   this.inputSearchText.emit(this.searchText);
    
  }
}
