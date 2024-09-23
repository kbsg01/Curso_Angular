import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  // imports: [CommonModule,RouterOutlet], Common Module se importa para la forma antigua de programar
export class AppComponent implements OnInit {
  //Default
  title: string = 'Hola mundo angular';
  subTitle = 'contador de estado de session';
  //Se puede declarar como public private. Se puede declarar el tipo de dato agregando ': <type>' 
  //title : string = 'Hola Mundo';

  users : string[]  = ['Pepe','Juan', 'Adrian', 'Sam']

  visible : boolean = false;
  
   counter : number = 0;
   ngOnInit(): void {
    throw new Error('Method not implemented');
}

  setVisible(): void {
    this.visible = this.visible? false: true;
    console.log('Hiciste clic en setVisible');
  }
  setCounter(counter:number): void {
    this.counter = counter;

  }
}
