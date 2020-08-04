import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
})
export class ArtistaComponent implements OnInit {
  public artist$: Observable<any>;
  public traks$: Observable<any[]>;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.artist$ = this.spotify.getArtista(id);
      this.traks$ = this.spotify.gettracks(id);
    });
  }
}
