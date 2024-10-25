import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class InicioComponent implements OnInit {

  formularioForm: FormGroup; // Especificar el tipo de formulario

  constructor(private formBuilder: FormBuilder) {
    this.formularioForm = this.formBuilder.group({
      nombre: [''], // Usa un array para establecer el valor inicial
      apellido: [''] // Usa un array para establecer el valor inicial
    });
  }

  ngOnInit() {
    console.log("hola");
  }

  enviarDatos() {
    let datos_formulario = this.formularioForm.value;
    console.log(datos_formulario); // Usa la variable definida
  }
}
