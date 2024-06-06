import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent {

  resetParam = {
    email: '',
    code: '',
    password: '',
    confirmPassword: '',
  }

  resetForm(event: any) {
    console.log(this.resetParam)
  }

}
