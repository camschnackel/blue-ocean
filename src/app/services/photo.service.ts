import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Image } from '../image';

@Injectable()
export class PhotoService {
  constructor(private http: HttpClient) { }

  getBathImages() {
    return this.http
      .get<any>('assets/project-photos/data/bath-photos.json')
      .toPromise()
      .then((res) => <Image[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getKitchenImages() {
    return this.http
      .get<any>('assets/project-photos/data/kitchen-photos.json')
      .toPromise()
      .then((res) => <Image[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getHouseImages() {
    return this.http
      .get<any>('assets/project-photos/data/house-photos.json')
      .toPromise()
      .then((res) => <Image[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getPatioImages() {
    return this.http
      .get<any>('assets/project-photos/data/patio-photos.json')
      .toPromise()
      .then((res) => <Image[]>res.data)
      .then((data) => {
        return data;
      });
  }
}