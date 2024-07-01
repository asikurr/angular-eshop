import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() alls: number = 0;
  @Input() inStock: number = 0;
  @Input() outStock: number = 0;

  @Output() onSelectChangeRadio: EventEmitter<string> = new EventEmitter<string>();
  selectedFilterRadioButton: string = 'all';

  onSelectChangeRadioB() {
    this.onSelectChangeRadio.emit(this.selectedFilterRadioButton);
  }
}
