import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '@environments/environment.development';
import { Character } from '@shared/models/character';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(params: Params){
    return this.http.get<Character[]>(`${environment.url_api}/character`, { params })
  }

  getCharacter(id: number) {
    this.http.get<Character>(`${environment.url_api}/${id}`)
  }
}
