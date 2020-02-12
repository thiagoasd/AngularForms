import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

interface contato {
  "nome": string;
  "email": string;
}

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent implements OnInit {

  contatos: contato[] = [];
  dmt: string = "%&%"

  constructor() { }

  ngOnInit(): void {
    setInterval(this.carregaGrid.bind(this), 1000);
  }

  checaBanco(matricula: number) {
    let token = window.sessionStorage.getItem("" + matricula);
    return (token === null)
  }

  getBanco(chave: number) {
    let token = window.sessionStorage.getItem("" + chave);
    let dados = token.split(this.dmt)
    let tmp: contato = {
      "nome": dados[0],
      "email": dados[1]
    };

    return tmp;
  }

  carregaGrid() {
    let counter: number = 0;
    let flag: boolean = false;
    this.contatos = [];

    while (!flag) {
      flag = this.checaBanco(counter);

      // Se flag for true, o elemento é nulo
      if (flag !== true) {
        let element = this.getBanco(counter);
        this.contatos.push(element);
        console.log(element);
      }

      counter++;
    }
  }


}
