import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerLogo: string = 'assets/logos/c6a21e_be6cc4d640761f3a67ccfe0b9d3d2cb4.webp'
  footerText: string = '© 2022 Blue Ocean Properties. All rights reserved.'
}
