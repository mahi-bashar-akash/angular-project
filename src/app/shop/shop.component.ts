import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule} from "@angular/common";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  productList = [
    { id: '1', productImage: '/shop/product-07.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '12.00' },
    { id: '2', productImage: '/shop/product-08.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '18.00' },
    { id: '3', productImage: '/shop/product-09.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '22.00' },
    { id: '4', productImage: '/shop/product-10.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '26.00' },
    { id: '5', productImage: '/shop/product-11.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '30.00' },
    { id: '6', productImage: '/shop/product-12.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '34.00' },
    { id: '7', productImage: '/shop/product-13.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '38.00' },
    { id: '8', productImage: '/shop/product-14.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '42.00' },
    { id: '9', productImage: '/shop/product-15.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '46.00' },
    { id: '10', productImage: '/shop/product-16.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '52.00' },
    { id: '11', productImage: '/shop/product-17.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '58.00' },
    { id: '12', productImage: '/shop/product-18.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '64.00' },
  ]

}
