import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //*HttpHeader* Pasarle los headers a el get (token)

//observadores
import { map, filter } from 'rxjs/operators'; //filtro de arrays

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token =
    'BQAActeq2OyavsNJFuYrWPubrP-bgDV4iKrhEixD4M1bUBRBzvNCG6r2GaiNvh-hCPtliqf-nBslKLLcFGI';
  constructor(private http: HttpClient) {
    console.log('Spotify Service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data) => data['albums'].items)
    );
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  gettracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data) => data['tracks'] )
    );
  }

  getArtistas(termino: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http
      .get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {
        headers,
      })
      .pipe(
        map((artist) => {
          return artist['artists'].items.filter((items) => {
            if (items && items.images.length && items.genres.length > 0) {
              return true;
            }
          });
        })
      );
  }
}
/* filter((artists) => {
                  if (artists['artists'].items) {
                    console.log(artists);
                    return true;
                  }*/
