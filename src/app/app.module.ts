import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CentroidInfoComponent } from './components/centroid-info/centroid-info.component';
import { CoordinatesInputsComponent } from './components/coordinates-inputs/coordinates-inputs.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CentroidInfoComponent,
    CoordinatesInputsComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
