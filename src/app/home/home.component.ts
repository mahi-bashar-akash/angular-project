import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  bannerOwlCarousel: any = {
    loop: true,
    mouseDrag: true,
    dots: true,
    dotsSpeed: 1500,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 1 },
      991: { items: 1 }
    },
    nav: false
  }

  mostViewProductOwlCarousel: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsSpeed: 700,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      991: { items: 4 }
    },
    nav: false
  }

  mostViewProductList = [
    { id: '1', productImage: '/shop/product-21.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '2', productImage: '/shop/product-22.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '3', productImage: '/shop/product-23.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '4', productImage: '/shop/product-24.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '5', productImage: '/shop/product-25.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '6', productImage: '/shop/product-26.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '7', productImage: '/shop/product-27.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '8', productImage: '/shop/product-28.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
  ]

  latestArrivalProductOwlCarousel: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsSpeed: 700,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      991: { items: 4 }
    },
    nav: false
  }

  latestArrivalProductList = [
    { id: '1', productImage: '/shop/product-20.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '2', productImage: '/shop/product-19.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '3', productImage: '/shop/product-18.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '4', productImage: '/shop/product-17.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '5', productImage: '/shop/product-16.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '6', productImage: '/shop/product-15.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '7', productImage: '/shop/product-14.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
    { id: '8', productImage: '/shop/product-13.jpg', productName: 'Aopo Designs Woolrich Klettersack Backpack', productPrice: '122.00' },
  ]

  blogOwlCarousel: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsSpeed: 700,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      991: { items: 3 }
    },
    nav: false
  }

  blogList = [
    { id: '1', blogImage: '/blogs/blog-10.jpg', blogTitle: 'Aypi non habent claritatem  insitam.', blogAuthor: 'HasTech', blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque deserunt doloremque dolorum ducimus earum excepturi id impedit in, incidunt itaque iure laudantium magni minima nisi non quam repellendus sapiente suscipit tempora ullam voluptatibus?' },
    { id: '2', blogImage: '/blogs/blog-09.jpg', blogTitle: 'Aypi non habent claritatem  insitam.', blogAuthor: 'HasTech', blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque deserunt doloremque dolorum ducimus earum excepturi id impedit in, incidunt itaque iure laudantium magni minima nisi non quam repellendus sapiente suscipit tempora ullam voluptatibus?' },
    { id: '3', blogImage: '/blogs/blog-08.jpg', blogTitle: 'Aypi non habent claritatem  insitam.', blogAuthor: 'HasTech', blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque deserunt doloremque dolorum ducimus earum excepturi id impedit in, incidunt itaque iure laudantium magni minima nisi non quam repellendus sapiente suscipit tempora ullam voluptatibus?' },
    { id: '4', blogImage: '/blogs/blog-07.jpg', blogTitle: 'Aypi non habent claritatem  insitam.', blogAuthor: 'HasTech', blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque deserunt doloremque dolorum ducimus earum excepturi id impedit in, incidunt itaque iure laudantium magni minima nisi non quam repellendus sapiente suscipit tempora ullam voluptatibus?' },
    { id: '5', blogImage: '/blogs/blog-06.jpg', blogTitle: 'Aypi non habent claritatem  insitam.', blogAuthor: 'HasTech', blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque deserunt doloremque dolorum ducimus earum excepturi id impedit in, incidunt itaque iure laudantium magni minima nisi non quam repellendus sapiente suscipit tempora ullam voluptatibus?' },
    { id: '6', blogImage: '/blogs/blog-05.jpg', blogTitle: 'Aypi non habent claritatem  insitam.', blogAuthor: 'HasTech', blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque deserunt doloremque dolorum ducimus earum excepturi id impedit in, incidunt itaque iure laudantium magni minima nisi non quam repellendus sapiente suscipit tempora ullam voluptatibus?' },
  ]

}
