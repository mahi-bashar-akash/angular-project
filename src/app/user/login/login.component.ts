import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginParam = {
    email: '',
    password: '',
    remember_me: '',
  }

  loginForm(event: any) {
    console.log(this.loginParam)
  }

}
