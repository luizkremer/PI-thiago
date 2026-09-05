import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.css'
})
export class Ex6 {
  contador = 0;

  aumentar(): void {
    this.contador++;
  }

  diminuir(): void {
    if (this.contador > 0) {
      this.contador--;
    }
  }
}