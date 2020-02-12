import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AulaSofrimento';
  dmt: string = "%&%"
  counter: number = 0;

  salvarBanco(nome: string, email: string) {

    let matriculas: string = window.sessionStorage.getItem("mats");
    let flag = false;

    //Cria um token com as infos do funcionario
    let Token: string = nome + this.dmt + email + this.dmt;

    //Salva os valores no session Storage usando a sua matricula como chave
    window.sessionStorage.setItem("" + this.counter, Token);

    alert("Cadastro realizado")
  }



















}
