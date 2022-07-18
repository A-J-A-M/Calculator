import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  operandoA:number;
  operandoB:number;

  @Output() resultadoSuma = new EventEmitter<string>();

  sumar():void{
    let r = this.operandoA + this.operandoB;
    if (!isNaN(r)) {
      this.resultadoSuma.emit(String(r));
    }
  }

}
