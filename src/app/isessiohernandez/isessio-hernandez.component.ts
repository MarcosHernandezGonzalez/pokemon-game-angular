import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isessio-hernandez',
  templateUrl: './isessio-hernandez.component.html',
  styleUrls: ['./isessio-hernandez.component.css']
})
export class IsessioHernandezComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @ts-ignore
  nom = ''
  setNom(){
    // @ts-ignore
    this.nom = (document.getElementById('nom') as HTMLInputElement).value;
    // @ts-ignore
    localStorage.setItem('nom', this.nom);
    // @ts-ignore
    console.log(this.nom)
  }
}
