import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  bathImages: any[];
  kitchenImages: any[];
  houseImages: any[];
  patioImages: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getBathImages().then(images => {
      this.bathImages = images
    })
    this.photoService.getKitchenImages().then(images => {
      this.kitchenImages = images
    })
    this.photoService.getHouseImages().then(images => {
      this.houseImages = images
    })
    this.photoService.getPatioImages().then(images => {
      this.patioImages = images
    })
  }
}
