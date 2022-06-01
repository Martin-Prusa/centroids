import { Injectable } from '@angular/core';
import {CoordinatesModel} from "../models/coordinates.model";

@Injectable({
  providedIn: 'root'
})
export class CentroidService {

  private readonly _coordinates: CoordinatesModel[] = []
  private _centroid: CoordinatesModel | null = null

  constructor() {
    this._coordinates.push(new CoordinatesModel())
  }

  addCoordinate(coords: CoordinatesModel) {
    this._coordinates.push(coords)
  }

  removeCoordinate(coordinate: CoordinatesModel) {
    this._coordinates.splice(this._coordinates.indexOf(coordinate), 1)
  }

  calcCentroid() {
    this._centroid = new CoordinatesModel()
    this._centroid.x = this._coordinates.reduce((previousValue, currentValue) => previousValue + (+currentValue.x!!), 0) / this._coordinates.length
    this._centroid.y = this._coordinates.reduce((previousValue, currentValue) => previousValue + (+currentValue.y!!), 0) / this._coordinates.length
  }

  get isCentroidPresent() {
    return this._centroid !== null
  }

  get coordinates() {
    return this._coordinates
  }

  get centroid() {
    return this._centroid
  }


}
