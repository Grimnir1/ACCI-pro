import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-event',
  imports: [],
  templateUrl: './upcoming-event.component.html',
  styleUrl: './upcoming-event.component.css'
})
export class UpcomingEventComponent {

  ngOnInit () {
    window.scrollTo(0, 0);
  }
}
