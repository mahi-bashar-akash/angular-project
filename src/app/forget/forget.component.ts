import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.scss'
})
export class ForgetComponent {

  forgetParam = {
    email: '',
  }

  forgetForm(event: any) {
    console.log(this.forgetParam)
  }

}
