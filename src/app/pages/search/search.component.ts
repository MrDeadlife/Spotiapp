import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  loadin = true;
  artistas:any[]=[];
  constructor( private spotify:SpotifyService, private router:Router) { }

  buscar(termino:string){
    console.log(termino)
    this.spotify.getArtistas(termino)
        .subscribe((artists:any)=>{
          console.log(artists)
          this.artistas = artists
        })
  }

  verArtista(artista:any){
      console.log(artista);
      var artistaId;
      artistaId = artista.id;
      console.log('aristaID '+artista.id)
      this.router.navigate(['/artista', artistaId]);
     }

}
