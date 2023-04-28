import { DOCUMENT } from'@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Character } from '@shared/models/character';
import { CharactersService } from 'src/app/services/characters/characters.service';
import { Params } from '../../../shared/models/params';
import { Info } from '@shared/models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  characters: Character[] = [];
  params: Params = {
    page: 0,
    name: ''
  };

  info: Info = {
    next: null,
    pages: 0
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterSvc: CharactersService
  ) {

  }

  ngOnInit(): void {
    this.getCharacters();
  }

@HostListener('window:scroll', [])
  onScrollDown(){
    let height = this.document.documentElement.scrollTop;
    let top = this.document.documentElement.scrollHeight;
    let viewport = window.innerHeight;

    if ((this.info.next !== null && this.params.page < this.info.pages) && (top - height == viewport)) {
      this.params.page++;
      this.getCharacters()
    }
    return
  }

  getCharacters(){
    this.characterSvc.getCharacters(this.params)
    .subscribe({
      next: (res: any) => {
        const {info, results} = res;
        this.characters.push(...results)
        this.info = info;
      },
      error: (error: any) => {

      }
    })
  }

  getSearchCharacter(name: string){
    this.params.page = 1;
    this.params.name = name;
    this.characterSvc.getCharacters(this.params)
    .subscribe({
      next: (res: any) => {
        const {info, results} = res;
        this.characters = results
        this.info = info;
      },
      error: (error: any) => {

      }
    })
  }
}
