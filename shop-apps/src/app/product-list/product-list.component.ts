import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name : string = "Node 9 Pro Max"
  // price : number = 19500
  // color : string = "Blue"

  name = "Asikur Rahaman";
  addToCart : number = 0;
  product = {
    name : "Node 9 Pro Max",
    price : 19500,
    color :"Blue",
    discount : 7,
    inStock : 5,
    pImage : '/assets/images/images.jpeg',
    display : false

  }

  getDiscountPrice(){
    return this.product.price - ((this.product.price * this.product.discount) / 100)
  }

  btnDisable(){
    if (this.product.inStock > 0) {
      this.product.display = true;
    }
  }

  onChange(event : any){
    // console.log(event);
    // this.name = event.target.value;
    
  }
  decreaseValue(){
    if (this.addToCart>0) {
      this.addToCart--;
    }
   
  }

  increaseValue(){
    if (this.addToCart < this.product.inStock) {
        this.addToCart++;
      
    }
  }

}
