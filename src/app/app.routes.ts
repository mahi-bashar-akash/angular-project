import { Routes } from '@angular/router';

// user portal
import { FrontLayoutComponent } from './user/layout/layout.component'
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
import { AdminLayoutComponent } from "./admin/layout/layout.component";
  import { DashboardComponent } from "./admin/dashboard/dashboard.component";
  import { CalendarComponent } from "./admin/calendar/calendar.component";
  import { ChatComponent } from "./admin/chat/chat.component";
  import { SliderComponent } from "./admin/slider/slider.component";
  import { BoxComponent } from "./admin/box/box.component";
  import { ProductComponent } from "./admin/product/product.component";
  import { InvoiceComponent } from "./admin/invoice/invoice.component";
  import { UserComponent } from "./admin/user/user.component";

export const routes: Routes = [

  // frontend route

  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: FrontLayoutComponent,
      children: [
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

          // user profile route
          { path: 'profile', redirectTo: '/details', pathMatch: 'full' },
          { path: 'profile/details', component: ProfileComponent },
          { path: 'profile/wishlist-history', component: ProfileWishlistComponent },
          { path: 'profile/order-history', component: ProfileOrderHistoryComponent },
          { path: 'profile/settings', component: ProfileSettingsComponent },

      ]
    },

  // admin route

  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
    { path: 'admin', component: AdminLayoutComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'calendar', component: CalendarComponent },
        { path: 'chat', component: ChatComponent },
        { path: 'slider', component: SliderComponent },
        { path: 'box', component: BoxComponent },
        { path: 'product', component: ProductComponent },
        { path: 'invoice', component: InvoiceComponent },
        { path: 'user/list', component: UserComponent },
      ]
    },

];
