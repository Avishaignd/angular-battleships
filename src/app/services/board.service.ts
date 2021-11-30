import { Injectable } from '@angular/core';
import { BoardComponent } from '../components/board/board.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BoardService {

  // playerId: number = 1;
  boards: BoardComponent[] = [];

  constructor() { }

  
}
