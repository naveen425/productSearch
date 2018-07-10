import { Component, OnInit } from '@angular/core';
//import { ProductService } from "./products/product.service";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers: [ProductService]
})
export class AppComponent implements OnInit{

  ngOnInit(){}
  pageTitle = 'Product Management';
  
}
