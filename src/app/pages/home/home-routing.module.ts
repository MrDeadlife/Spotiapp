import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [{ 
  path: '',
 component: HomeComponent 
},
 { 
   path: 'search',
    loadChildren: () => import('../search/search.module').then(m => m.SearchModule) 
  },
  { path: 'artista/:id',
   loadChildren: () => import('../artista/artista.module').then(m => m.ArtistaModule) 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
