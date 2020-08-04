import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  loadin = true;
  public artistas$:Observable<any[]>;
  constructor(private spotify: SpotifyService, private router: Router) {}

  ngOnInit(){
  
  }

  buscar(termino: string) {
    console.log(termino);
    this.artistas$ = this.spotify.getArtistas(termino);    
  }

  verArtista(artista: any) {
    var artistaId;
    artistaId = artista.id;
    this.router.navigate(['home/artista', artistaId]);
  }
}
