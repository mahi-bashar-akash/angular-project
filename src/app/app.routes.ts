import { Routes } from '@angular/router';

// user portal
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { BlogComponent } from './user/blog/blog.component';
import { SingleBlogComponent } from './user/single-blog/single-blog.component';
import { ShopComponent } from './user/shop/shop.component';
import { SingleProductComponent } from './user/single-product/single-product.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ForgetComponent } from './user/forget/forget.component';
import { ResetComponent } from './user/reset/reset.component';
import { CartComponent } from './user/cart/cart.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ProfileWishlistComponent } from './user/profile-wishlist/profile-wishlist.component';
import { ProfileOrderHistoryComponent } from './user/profile-order-history/profile-order-history.component';
import { ProfileSettingsComponent } from './user/profile-settings/profile-settings.component';

// admin portal

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'single-blog', component: SingleBlogComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'single-product', component: SingleProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forget', component: ForgetComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
    { path: 'profile/details', component: ProfileComponent },
    { path: 'profile/wishlist-history', component: ProfileWishlistComponent },
    { path: 'profile/order-history', component: ProfileOrderHistoryComponent },
    { path: 'profile/settings', component: ProfileSettingsComponent },
];
