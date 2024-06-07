import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms";
import {RouterModule} from '@angular/router';
import { SideContentBlogComponent  } from './../side-content-blog/side-content-blog.component'
@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SideContentBlogComponent],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.scss'
})
export class SingleBlogComponent {
  blogReviewParam = {
    name: '',
    email: '',
    message: '',
  }

  blogReviewForm(event: any) {
    console.log(this.blogReviewParam)
  }
}
