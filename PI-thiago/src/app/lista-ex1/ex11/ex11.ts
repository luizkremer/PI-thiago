import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css'
})
export class Ex11 {
  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  aumentar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  get total(): number {
    return this.preco * this.quantidade;
  }

  adicionarAoCarrinho(): void {
    this.mensagem = `${this.quantidade} unidade(s) de ${this.produto} adicionada(s) ao carrinho.`;
  }
}