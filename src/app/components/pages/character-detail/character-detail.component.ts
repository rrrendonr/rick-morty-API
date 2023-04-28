import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters/characters.service';
import { Character, Origin } from '../../../shared/models/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  characterId: string = '';
  character: Character = {
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
    }
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private characterSvc: CharactersService
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
      },
      error: (error: any) => {

      }
    })

  }
}
