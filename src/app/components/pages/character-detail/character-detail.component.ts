import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters/characters.service';
import { Character, CharacterDetail, Origin } from '../../../shared/models/character';
import { ChaptersService } from 'src/app/services/chapters/chapters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  characterId: string = '';
  character: CharacterDetail = {
    id: '',
    name: '',
    image: '',
    species: '',
    status: '',
    location: {
      name: '',
      url: ''
    },
    origin: {
      name: '',
      url: ''
    },
    episode: []
  }

  episodes: Array<any> = []

  constructor(
    private activeRoute: ActivatedRoute,
    private characterSvc: CharactersService,
    private chapterSvc: ChaptersService
  ) {
    this.characterId = this.activeRoute.snapshot.paramMap.get('id') as string
  }

  ngOnInit(): void {
    this.getCharacter()
  }


  getCharacter(){
    this.characterSvc.getCharacterById(this.characterId)
    .subscribe({
      next: (res: any) => {
        this.character = res
        this.getChapter()
      },
      error: (error: any) => {

      }
    })

  }

  getChapter(){
    for (let url of this.character.episode) {
      this.chapterSvc.getChapter(url)
      .subscribe({
        next: (res: any) => {
          this.episodes.push(res)
          console.log(this.episodes);
        },
      error: (error: any) => {

      }
    })

    }

  }
}
