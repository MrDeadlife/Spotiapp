import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  loadin = true;
  newSongs: any[] = [];
  constructor(private spotify: SpotifyService, private router: Router) {}

  ngOnInit() {
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
      this.loadin = false;
    });
  }

  verArtista(cancion: any) {
    let artistaId;
    artistaId = cancion.artists[0].id;
    this.router.navigate(['home/artista', artistaId]);
  }
}
