import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _score: number = 0;
  private _lifes: number = 0;
  private _highScore: number = 0;

  get score(): number {
    return this._score;
  }

  get highScore(): number {
    return this._highScore;
  }

  get lifes(): number {
    return this._lifes;
  }

  constructor(
    private _router: Router
  ) {
    this._highScore = parseInt(localStorage.getItem('highscore') || '0');
    console.log(this._highScore);
    // console.log(Number(localStorage.getItem('highScore')))
    let punts = localStorage.getItem('punts');
    this._score = Number(punts);
  }
  setPunts() {
    let punts = localStorage.getItem('punts');
    this._score = Number(punts);
  }

  resetGame() {
    this._score = 0;
    this._lifes = 5;
  }

  increasePoints() {
    this._score += 10;
  }

  decreaseLifes() {
    this._lifes -= 1;
    if (this._lifes <= 0) {

      if (this._score > this._highScore) this.newHighScore()

      this._router.navigate(['/game/gameover']);
    }
  }

  newHighScore() {
    this._highScore = this._score;
    localStorage.setItem('highscore', String(this._highScore));
  }
  // an array
  _players: Array<string> = [];
  _scores: Array<number> = [];
  isSet: boolean = false;
  addScore() {
    console.log(this._players);
    console.log(this._scores);
    let storedNom = localStorage.getItem('nom');
    for (let i = 0; i < this._players.length; i++) {
      if (this._players[i] === storedNom) {
        this._scores[i] += this.score;
        this.isSet = true;
      }
    }
    if (!this.isSet) {
      // @ts-ignore
      this._players.push(storedNom);
      this._scores.push(this.score);
    }
    this.isSet = false;
    console.log(this._players);
    console.log(this._scores);
  }
  get players(): Array<string> {
    return this._players;
  }
  get scores(): Array<number> {
    return this._scores;
  }

}
