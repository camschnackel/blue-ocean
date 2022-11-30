import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectImages: any[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getBathImages().then(images => {
      this.projectImages = images
    })
  }
}
