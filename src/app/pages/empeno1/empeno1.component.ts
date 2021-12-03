import { Component, OnInit } from '@angular/core';
import { Prenda } from 'src/app/prenda';
import { PrendaService } from 'src/app/prenda.service';

@Component({
  selector: 'app-empeno1',
  templateUrl: './empeno1.component.html',
  styleUrls: ['./empeno1.component.css']
})
export class Empeno1Component implements OnInit {

  query: String = "laptop"
  prendas!: Prenda[]

  constructor(private prendaService: PrendaService) { }

  ngOnInit(): void {
    this.prendaService.getItems(this.query).subscribe(data => {
      console.log(data)
      this.prendas = data
    })
  }

  searchItem(): void {
    this.prendaService.getItems(this.query).subscribe(data => {
      console.log(data)
      this.prendas = data
    })
  }
}
