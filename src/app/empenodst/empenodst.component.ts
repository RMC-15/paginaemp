import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ClientSearchResult } from '../client_data';

@Component({
  selector: 'app-empenodst',
  templateUrl: './empenodst.component.html',
  styleUrls: ['./empenodst.component.css']
})
export class EmpenodstComponent implements OnInit {

  clientSearchResult!: ClientSearchResult[]

  @ViewChild('query', {static: true}) queryElement: ElementRef;
  query: String = ""

  constructor(
    private clienteService: ClienteService,
    queryElement: ElementRef
  ) 
  { 
    this.queryElement = queryElement
    this.clientSearchResult = []
  }

  ngOnInit(): void {
  }

  searchClient() {
    this.query = this.queryElement.nativeElement.value
    this.clienteService.searchClient(this.query).subscribe(data => {
      if (typeof data !== "undefined" || data !== null) {
        this.clientSearchResult = data
      }
    })

  }

}