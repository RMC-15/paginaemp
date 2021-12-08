import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EstadoPrenda } from 'src/app/estado_prenda';
import { Prenda } from 'src/app/prenda';
import { PrendaService } from 'src/app/prenda.service';

@Component({
  selector: 'app-empeno1',
  templateUrl: './empeno1.component.html',
  styleUrls: ['./empeno1.component.css']
})
export class Empeno1Component implements OnInit {

  @ViewChild('query', {static: true}) queryElement: ElementRef;
  query: String = ""

  prendas!: Prenda[]
  estado_prendas!: EstadoPrenda[]

  constructor(
    private prendaService: PrendaService,
    queryElement: ElementRef
  ) 
  { 
    this.queryElement = queryElement
  }

  ngOnInit(): void {
    this.prendaService.getCatEst().subscribe(data => {
      this.estado_prendas = data
    })
  }

  searchItem(): void {
    this.query = this.queryElement.nativeElement.value
    if (this.query.length > 0) {
      this.prendaService.getItems(this.query).subscribe(data => {
        this.prendas = data
      })
    }
  }
}
