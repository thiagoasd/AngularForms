import { Component, OnInit } from '@angular/core';

interface contato {
  "nome": string;
  "email": string;
}


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  title = 'AulaSofrimento';
  dmt: string = "%&%"
  counter: number = 0;
  contato: contato = {
    "nome": "",
    "email": ""
  };

  constructor() { }

  ngOnInit(): void {
    let flag: boolean = false;
    let cnt: number = 0;


    while (!flag) {
      flag = this.checaBanco(cnt);

      if (flag != true) {
        cnt++;
      }
    }

    this.counter = cnt;
  }



  checaBanco(matricula: number) {
    let token = window.sessionStorage.getItem("" + matricula);
    return (token === null)
  }

  salvarBanco(nome: string, email: string) {

    let flag = false;

    //Cria um token com as infos do funcionario
    let Token: string = nome + this.dmt + email + this.dmt;

    //Salva os valores no session Storage usando a sua matricula como chave
    window.sessionStorage.setItem("" + this.counter, Token);
    console.log("id: " + this.counter);
    this.counter++;
    console.log("cadastro realizado");
  }

  onSubmit() {

    console.log(this.contato);
    this.salvarBanco(this.contato.nome, this.contato.email);
  }

}
