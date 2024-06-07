import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isessio-hernandez',
  templateUrl: './isessio-hernandez.component.html',
  styleUrls: ['./isessio-hernandez.component.css']
})
export class IsessioHernandezComponent implements OnInit {
  punts: number | null = null

  constructor() { }

  ngOnInit(): void {
  }
  // @ts-ignore
  nom = ''
  setNom(){
    // @ts-ignore
    this.nom = document.getElementById('nom').value
    // @ts-ignore
    localStorage.setItem('nom', this.nom);
    // @ts-ignore
    console.log(this.nom)
    // @ts-ignore
    this.punts = document.getElementById('punts').value
    if(this.punts == null){
      this.punts = 0
    }
    localStorage.setItem('punts', String(this.punts));
    console.log(this.punts)

  }
}
