import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoadingComponent } from '../components/loading/loading.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  schemas:[ 
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
