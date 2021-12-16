import { Injectable } from '@angular/core';
import { BoardComponent } from '../components/board/board.component';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BoardService {

  board: Array<any> =[]

  constructor() { }

  getBoard(): BoardComponent[] {
    for (let i = 0; i < 100; i++) {
      let tile = { sunk: false, number: i, ship: false };
      this.board.push(tile);
    }
    return this.board
  }
}
