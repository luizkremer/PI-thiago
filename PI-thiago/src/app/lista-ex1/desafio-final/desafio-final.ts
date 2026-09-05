import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.css'
})
export class DesafioFinal {
  nome = '';
  disciplinas = 1;
  mensagem = '';

  aumentar(): void {
    this.disciplinas++;
  }

  diminuir(): void {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula(): void {
    this.mensagem =
      `Matrícula realizada para ${this.nome} em ${this.disciplinas} disciplina(s).`;
  }
}