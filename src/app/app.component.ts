import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicación de calculadora'; 
  res: string;

  procesoRes(res:string){
    this.res = res;
  }
  
}
