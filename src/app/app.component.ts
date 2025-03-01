import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface Product {

  name: string;
  price: number;
  inStock: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  
  producto1: Product = {
   
    name: 'Mouse',
    price: 1500,
    inStock: true
  }

  producto2: Product = {

    name: 'Laptop',
    price: 2000,
    inStock: false
  }

carritoCompras: Product[] = [this.producto1, this.producto2]



  // Crear el arreglo de comidas
  comidas = [
    "Pizza",
    "Tacos",
    "Sushi",
    "Hamburguesa",
    "Pasta"
  ];

  // Leer el arreglo usando .map
  food = this.comidas.map((comida, index) => {
    console.log(`${index + 1}. ${comida}`);
  });


  title = 'myWeb'

totalPrecio!: number;

  ngOnInit() {
    this.calculateTotalPrecio();
  }

  calculateTotalPrecio() {
    this.totalPrecio = this.carritoCompras.reduce((sum, item) => sum + item.price, 0);
  }

  
}









