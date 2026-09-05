import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  standalone: false,
  templateUrl: './ex2.html',
  styleUrl: './ex2.css'
})
export class Ex2 {
  produto = 'Teclado';
  preco = 150;
  quantidade = 3;

  get total(): number {
    return this.preco * this.quantidade;
  }
}