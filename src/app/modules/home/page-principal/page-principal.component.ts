import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.css']
})
export class PagePrincipalComponent implements OnInit {
  public beneficios=[];
  public consultas=[];
  constructor() { 
    this.beneficios=[
      {icon:"school",text:"Nuestros egresados ganan 29% más que la media nacional*"},
      {icon:"store_mall_directory",text:"95% de los recién egresados de ISIMA cuenta con trabajo permanente"},      
      {icon:"menu_book",text:"50% de nuestros alumnos estudian y trabajan"},
      {icon:"question_answer",text:"En la Bolsa de Trabajo, los estudiantes tienen acceso a más de 43 mil vacantes"}           
    ]
    this.consultas=[
      {title:"Becas Académicas",text:"Obtén una Beca Académica hasta del 40% y alternativas para que puedas continuar estudiando, aun en momentos difíciles. ¡No pauses tus estudios!",textButton:"CALCULA TU BECA",icon:"fas fa-calculator"},
      {title:"¿Ya sabes qué estudiar?",text:"Apóyate del test vocacional sin costo y elige la carrera más afin a tus habilidades y aptitudes. ¡Descubre el camino ideal para ti!",textButton:"REALIZA EL TEST VOCACIONAL",icon:"fas fa-book-open"},
      {title:"Retoma tus estudios",text:"¿Tienes estudios inconclusos y deseas retomarlos? Con nuestro proceso de Revalidación desde casa, un asesor te apoyará en el proceso, ahorrando tiempo y dinero. ¡Aprovecha lo que ya estudiaste!",textButton:"CONOCE MÁS",icon:"fas fa-person-booth"}            
    ]
  }

  ngOnInit() {
    console.log(this.beneficios);
  }

}
