import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {

  @HostListener('window:keydown', ['$event'])

  handleEnter(event: KeyboardEvent, item: any) {
    if (event.code === "Enter") {
      this.onClick(item)
    }
  }

  board: Array<any> = [];
  ships: Array<any> = [];
  boardClicked: number = 10;

  constructor( private boardService: BoardService ) {}

  ngOnInit(): void {
    // for (let i = 0; i < 100; i++) {
    //   let test = { sunk: false, number: i, ship: false };
    //   this.board.push(test);
    // }
    this.board = this.boardService.getBoard()
    this.createShips();    
  }

  createShips() {
    for (let i = 0; i < 10; i++) {
      let shipLocation = Math.floor(Math.random() * 100);
      if (!this.ships.includes(shipLocation)) {
        this.ships.push(shipLocation);
        let shipObj = { sunk: false, number: shipLocation, ship: true };
        this.board[shipLocation] = shipObj;
      }
    }
  }


  onClick(item: any) {
    if (item.ship && item.sunk === false) {
      this.boardClicked--;
    }
    item.sunk = true;
    if (this.boardClicked === 0) {
      alert('You win!');
    }
  }
}
