import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistaRoutingModule } from './artista-routing.module';
import { ArtistaComponent } from './artista.component';
import { LoadingComponent } from '../components/loading/loading.component';


@NgModule({
  declarations: [ArtistaComponent],
  imports: [
    CommonModule,
    ArtistaRoutingModule
  ]
})
export class ArtistaModule { }
