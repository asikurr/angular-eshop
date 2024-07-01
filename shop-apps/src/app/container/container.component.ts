import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  // name : string = "Node 9 Pro Max"
  // price : number = 19500
  // color : string = "Blue"

  searchText: string = '';

  getSearchTextFromChild(value: string) {
    this.searchText = value;
  }

  name = 'Asikur Rahaman';
  addToCart: number = 0;
  product = {
    name: 'Node 9 Pro Max',
    price: 19500,
    color: 'Blue',
    discount: 7,
    inStock: 5,
    pImage: '/assets/images/images.jpeg',
    display: false,
  };

  getDiscountPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  btnDisable() {
    if (this.product.inStock > 0) {
      this.product.display = true;
    }
  }

  onChange(event: any) {
    // console.log(event);
    // this.name = event.target.value;
  }
  decreaseValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  increaseValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }
}
