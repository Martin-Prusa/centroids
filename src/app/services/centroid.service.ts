import { Injectable } from '@angular/core';
import {CoordinatesModel} from "../models/coordinates.model";

@Injectable({
  providedIn: 'root'
})
export class CentroidService {

  private readonly _coordinates: CoordinatesModel[] = []

  constructor() {
    this._coordinates.push(new CoordinatesModel())
  }

  addCoordinate(coords: CoordinatesModel) {
    this._coordinates.push(coords)
  }

  removeCoordinate(coordinate: CoordinatesModel) {
    this._coordinates.splice(this._coordinates.indexOf(coordinate), 1)
  }

  get coordinates() {
    return this._coordinates
  }

  get centroid() {
    const coords = new CoordinatesModel()
    coords.x = this._coordinates.reduce((previousValue, currentValue) => previousValue + currentValue.x, 0) / this._coordinates.length
    coords.y = this._coordinates.reduce((previousValue, currentValue) => previousValue + currentValue.y, 0) / this._coordinates.length
    return coords
  }


}
