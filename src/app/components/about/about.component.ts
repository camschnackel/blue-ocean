import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  headerImg: string = '../../../assets/project-photos/images/header.jpg'
  headerText = {
    one: 'Create the space',
    two: 'your visitors deserve to see.',
    three: 'Build the bathroom of your dreams, your own world class kitchen, or a room no one has even thought of yet.'
  }
}
