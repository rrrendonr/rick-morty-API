import { Component, Input } from '@angular/core';
import { Character } from '@shared/models/character';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent {

  @Input() character: Character = {
    id: '',
    name: '',
    image: '',
    species:'',
    status:'',
    location: {
      name: '',
      url: ''
    },
    origin: {
      name: '',
      url: ''
    }
  }
}
