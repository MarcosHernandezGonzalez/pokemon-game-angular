import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nom: string | null = null;
  setNom(){
    // @ts-ignore
    this.nom = document.getElementById("text").innerText
  }
}
