import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  registrationParam = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    remember_me: '',
    termsConditions: '',
  }

  registrationForm(event: any) {
    console.log(this.registrationParam)
  }

}
