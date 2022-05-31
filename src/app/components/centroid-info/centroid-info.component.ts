import { Component, OnInit } from '@angular/core';
import {CentroidService} from "../../services/centroid.service";

@Component({
  selector: 'app-centroid-info',
  templateUrl: './centroid-info.component.html',
  styleUrls: ['./centroid-info.component.scss']
})
export class CentroidInfoComponent implements OnInit {

  constructor(private centroidService: CentroidService) { }

  ngOnInit(): void {
  }

  get centroid() {
    return this.centroidService.centroid
  }

}
