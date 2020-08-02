import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { LoadingComponent } from '../components/loading/loading.component';


@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  schemas:[ 
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SearchModule { }
