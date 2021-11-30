import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: Array<any> = [];
  ships: Array<any> = [];
  boardClicked: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      let test = { sunk: false, number: i, ship: false };
      this.board.push(test);
    }
    this.createShips();
  }

  createShips() {
    for (let i = 1; i < 11; i++) {
      let shipLocation = Math.floor(Math.random() * 100);
      this.ships.push(shipLocation);
      let shipObj = { sunk: false, number: shipLocation + 'S', ship: true };
      this.board[shipLocation] = shipObj;
    }
    this.boardClicked = [...this.board]    
  }


  onClick(item: any) {
    // console.log(item);
    if(item.sunk ===false){
      this.boardClicked.pop()
    }
    item.sunk = true;
    if(this.boardClicked.length === 0) {
      alert("You win!")
    }
  }
}
