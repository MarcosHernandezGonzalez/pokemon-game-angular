import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../../game/services/player.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  constructor(private playerService: PlayerService) {
  }
  get scores(): any[] | undefined {
    return this.playerService.scores;
  }
  get players(): any[] | undefined {
    return this.playerService.players;
  }



  ngOnInit(): void {
    console.log(this.players);
    console.log(this.scores);
  }

}
