import { Component, OnInit } from '@angular/core';
import {CoordinatesModel} from "../../models/coordinates.model";
import {CentroidService} from "../../services/centroid.service";

@Component({
  selector: 'app-coordinates-inputs',
  templateUrl: './coordinates-inputs.component.html',
  styleUrls: ['./coordinates-inputs.component.scss']
})
export class CoordinatesInputsComponent implements OnInit {

  constructor(private readonly centroidService: CentroidService) { }

  ngOnInit(): void {
  }

  add() {
    this.centroidService.addCoordinate(new CoordinatesModel())
  }

  remove(coordinate: CoordinatesModel) {
    this.centroidService.removeCoordinate(coordinate)
  }

  get coordinates(): CoordinatesModel[] {
    return this.centroidService.coordinates
  }
}
