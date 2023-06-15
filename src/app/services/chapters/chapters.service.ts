import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  constructor(
    private http: HttpClient
  ) { }

    getChapter(url: string) {
      return this.http.get(url);
    }
}
