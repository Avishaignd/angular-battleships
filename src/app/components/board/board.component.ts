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
    this.boardService.getBoard().subscribe((board) => {
      this.board = board
    })
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
