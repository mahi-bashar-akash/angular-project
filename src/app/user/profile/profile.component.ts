import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  name: string = 'Mahi Bashar Akash';
  email: string = 'mahibashar2023@gmail.com';
  phoneNumber: string = '01400125289'
  PresentAddress: string = 'Bashtolla, Mollapara, Jessore Sadar, Jessore, Bangladesh'

  profileParam = {
    name: '',
    email: '',
    phoneNumber: '',
    presentAddress: '',
  }

  updateProfile(e: any) {
    console.log(this.profileParam)
  }

  passwordParam = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  }

  updatePassword(e: any) {
    console.log(this.passwordParam)
  }

}
