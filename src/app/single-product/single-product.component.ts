import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms";
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  productParam = {
    product_name: 'Aopo Designs Woolrich Klettersack Backpack',
    product_price: '122.00',
    product_tax: '20',
    product_reward_points: '200',
    product_brand: 'Armani',
    product_code: 'PRO082379138',
    product_color_availability: 'black',
    product_size_availability: 'L',
  }

  productForm(event: any) {
    console.log(this.productParam)
  }

  productReviewParam = {
    name: '',
    email: '',
    message: '',
  }

  productReviewForm(event: any) {
    console.log(this.productReviewParam)
  }

}
