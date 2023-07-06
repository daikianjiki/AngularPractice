import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlistwithsearchbar',
  templateUrl: './productlistwithsearchbar.component.html',
  styleUrls: ['./productlistwithsearchbar.component.css']
})
export class ProductlistwithsearchbarComponent implements OnInit {

  ngOnInit(): void {
    this.filteredProducts = this.products
  }

  products: { name: string, price: number }[] = [
    {name: "Laptop", price: 1099},
    {name: "Mobile", price: 199},
    {name: "Desktop", price: 799},
    {name: "Mouse", price: 14},
    {name: "Keyboard", price: 16},
    {name: "Headphones", price: 20}
  ]

  filteredProducts: { name: string, price: number }[] = []

  searchFor(text: string) : void {
    if (text.trim() === '') {
      this.filteredProducts = this.products
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase()))
    }
  }

}
