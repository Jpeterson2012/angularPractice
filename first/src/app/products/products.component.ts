import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() {}

ngOnInit(): void {
  
}
products = [
  {id: 1, name: 'Minimalists Analog Watch', price: 109, color: 'Black', available: 'Available', image: '/assets/image1.jpg'},
  {id: 2, name: 'Hisense Ultra HD Smart Tv', price: 900, color: 'Black', available: 'UnAvailable', image: 'assets/image2.jpg'},
  {id: 3, name: 'Apple Iphone 12', price: 1744, color: 'White', available: 'Available', image: 'assets/image3.jpg'}
];
returnAllProd(){
  return this.products.length;
}
returnAvailProd(){
  return this.products.filter(product => product.available === 'Available').length;
}
returnUnavailProd(){
  return this.products.filter(product => product.available === 'UnAvailable').length;
}

productsCountRadioButton: string = 'All';
searchText: string = '';

onFilterRadioButtonChanged(data: string){
  this.productsCountRadioButton = data;
}

onSearchTextEntered(data: string) {
  this.searchText = data;
}

//Tutuorial way
mostExpensive = this.getExpensive();
getMostExpensive(){
  let productCopy = [...this.products];
  return productCopy.sort((curr,next) => next.price - curr.price)[0];
}
//My way
getExpensive(){
  let max: number  = 0;
  for (let product of this.products){
    if (max < product.price){
      max = product.price;
    }
  }
    return max;
}
}
