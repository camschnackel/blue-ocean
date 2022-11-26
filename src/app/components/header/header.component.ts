import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Blue Ocean';

  constructor() { }

  ngOnInit(): void {

  }

  toggleAddTask() {
    console.log('toggle')
  }
}
