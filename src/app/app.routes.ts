import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
  import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ShopComponent } from './shop/shop.component';
  import { SingleProductComponent } from './single-product/single-product.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
    { path: 'single-blog', component: SingleBlogComponent },
  { path: 'shop', component: ShopComponent },
    { path: 'single-product', component: SingleProductComponent },
];
