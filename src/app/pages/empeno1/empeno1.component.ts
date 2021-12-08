import { BindingScope } from '@angular/compiler/src/render3/view/template';
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
  estadoPrendas!: EstadoPrenda[]

  selectedDetallePrenda: number = -1
  selectedEstadoPrenda: number = 0

  prestamoMinimo: number = 0
  prestamoMaximo: number = 0
  prestamoMontoAprobado: number = 0

  constructor(
    private prendaService: PrendaService,
    queryElement: ElementRef
  ) 
  { 
    this.queryElement = queryElement
  }

  ngOnInit(): void {
    this.prendaService.getCatEst().subscribe(data => {
      this.estadoPrendas = data
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

  calcular(): void {
    if (this.selectedDetallePrenda === -1) {
      return
    }

    let montoAforo = this.prendas.find(e => {
      return e.id_detalle_prenda == this.selectedDetallePrenda
    })?.monto_aforo
    
    let montos: number[] = []
    this.estadoPrendas.forEach(e => {
      montos.push(e.porc_aforo * Number(montoAforo))
    })

    let porcAforo = this.estadoPrendas.find(e => {
      return e.id_cat_est_prenda == this.selectedEstadoPrenda
    })?.porc_aforo

    if (porcAforo && montoAforo) {
      this.prestamoMontoAprobado = Number(montoAforo) * Number(porcAforo)
      this.prestamoMinimo = Math.min(...montos)
      this.prestamoMaximo = Math.max(...montos)
    }
  }
}
