import { Component, OnInit } from '@angular/core';
import {CentroidService} from "../../services/centroid.service";
import {CoordinatesModel} from "../../models/coordinates.model";

@Component({
  selector: 'app-centroid-info',
  templateUrl: './centroid-info.component.html',
  styleUrls: ['./centroid-info.component.scss']
})
export class CentroidInfoComponent implements OnInit {

  constructor(private centroidService: CentroidService) { }

  ngOnInit(): void {
  }

  get isCentroidPresent() {
    return this.centroidService.isCentroidPresent
  }

  get roundedCentroid() {
    const rounded = new CoordinatesModel()
    rounded.x = Math.round(this.centroidService.centroid!!.x!! * 1000) / 1000
    rounded.y = Math.round(this.centroidService.centroid!!.y!!* 1000) / 1000
    return rounded
  }

}
