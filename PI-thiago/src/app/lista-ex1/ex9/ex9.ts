import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.css'
})
export class Ex9 {
  produto = 'Mouse Gamer';
  estoque = 10;

  aumentar(): void {
    this.estoque++;
  }

  diminuir(): void {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}