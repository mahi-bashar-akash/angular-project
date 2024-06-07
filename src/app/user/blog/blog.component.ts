import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SideContentBlogComponent  } from './../side-content-blog/side-content-blog.component'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, SideContentBlogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {}
