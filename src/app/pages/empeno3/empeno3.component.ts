import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CatIdeService } from 'src/app/cat-ide.service';
import { ClienteService } from 'src/app/cliente.service';
import { Client } from 'src/app/client_data';
import { CatIde } from 'src/app/Shared/models/catide';

@Component({
  selector: 'app-empeno3',
  templateUrl: './empeno3.component.html',
  styleUrls: ['./empeno3.component.css']
})
export class Empeno3Component implements OnInit {

  catIde: CatIde[] = []
  form: FormGroup;

  constructor(
    private catIdeService: CatIdeService,
    private clientService: ClienteService,
    public fb: FormBuilder
    ) 
    { 
      this.form = this.fb.group({
        nom_1: [''],
        nom_2: [''],
        apellido_pat: [''],
        apellido_mat: [''],
        edad: [],
        numero_ide: [''],
        correos: ['']
      })
    }

  ngOnInit(): void {
    this.catIdeService.getItems().subscribe(data => {
      this.catIde = data
    })
  }

  onSubmit(): void {
    let newClient = new Client()
    newClient =  this.form.value
    newClient.correos = [{
      "dir_email": this.form.value['correos'], 
      "ver_email": false
    }]
    newClient.domicilios = [{
      "tipo_domicilio": "Oficina", 
      "id_ref_cp": 1, 
      "nom_direccion": this.form.value['nom_direccion'], 
      "no_int": this.form.value['num_int'], 
      "no_ext": "", 
      "vigencia": true
    }]
    newClient.telefonos = [{
      "tipo_tel": "Trabajo",
      "no_tel": 9994179633
    }]

    this.clientService.addClient(newClient).subscribe(
      response => {
        console.log(response)
      }
    )
  }

}
