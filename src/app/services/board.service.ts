import { Injectable } from '@angular/core';
import { BoardComponent } from '../components/board/board.component';
import {Observable, Subject, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BoardService {

  board: Array<any> =[];
  ships: Array<any> = [];

  constructor() { }

  getBoard(): Observable<BoardComponent[]> {
    for (let i = 0; i < 100; i++) {
      let tile = { sunk: false, number: i, ship: false };
      this.board.push(tile);
    }
    this.createShips()
    return of(this.board);
  }

  createShips() {
    for (let i = 0; i < 10; i++) {
      let shipLocation = Math.floor(Math.random() * 100);
      if (!this.ships.includes(shipLocation)) {
        this.ships.push(shipLocation);
        let shipObj = { sunk: false, number: shipLocation, ship: true };
        this.board[shipLocation] = shipObj;        
      } else {
        this.ships.push(shipLocation + 1);
        let shipObj = { sunk: false, number: shipLocation + 1, ship: true };
        this.board[shipLocation] = shipObj;     
      }      
    }
  }
}
