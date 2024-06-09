import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-calendar',
  standalone: true,
    imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  openEventModal() {
    const myModal = new bootstrap.Modal("#eventModel", {keyboard: false});
    myModal.show();
  }

  closeEventModal() {
    let myModalEl = document.getElementById('eventModel');
    let modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
  }

  openDeleteEventModal() {
    const myModal = new bootstrap.Modal("#deleteEventModel", {keyboard: false});
    myModal.show();
  }

  closeDeleteEventModal() {
    let myModalEl = document.getElementById('deleteEventModel');
    let modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
  }

}
