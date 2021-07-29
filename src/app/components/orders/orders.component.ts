import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
//Importamos interfaz del producto
import { Product } from 'src/app/models/product';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  products: Product[] = [];
   total_count:number=1;
  constructor( private s:ProductServiceService) { }

  ngOnInit(): void {
    this.s.itemsCollection
    .snapshotChanges()
    .subscribe(item => {
    this.products = [];
    item.forEach(product => {
      let data = product.payload.doc.data();
       let id = product.payload.doc.id;
      console.log('que es?', id)
      this.products.push({id, ... data});
      
    })
})
  };
 
  productCounting(product:Product){
    this.s.incrementProduct(product)
  }
  
  
  }
