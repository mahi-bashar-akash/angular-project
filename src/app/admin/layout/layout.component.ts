import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})

export class AdminLayoutComponent {

  openSidebar() {
    if(window.innerWidth <= 576) {
      let sidebar = document.querySelector('.admin-sidebar');
      if(sidebar) {
        sidebar.classList.add('active')
      }
    }
  }

  closeSidebar() {
    if(window.innerWidth <= 576) {
      let sidebar = document.querySelector('.admin-sidebar');
      if(sidebar) {
        sidebar.classList.remove('active')
      }
    }
  }

}
