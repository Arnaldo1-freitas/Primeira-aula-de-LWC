import { LightningElement } from "lwc";

export default class App extends LightningElement {
//Criar variáveis, atributos.

Nome = 'Arnaldo de Freitas';
Telefone = '777777777';
CPF = '9999999999';
Idade = 27;
Email = 'arnaldo1.3@hotmail.com';
Instagram = 'https://www.instagram.com/arnaldofreitas_team/';
Linkedin = 'https://www.linkedin.com/in/arnaldo-freitas/';

visible = true;

trocarDiv(){
  //this.visible = false;
  if(this.visible == false){
    this.visible = true;
  }else{
    this.visible = false;
    }
  }

  alterarValores(){
  this.Nome="Tarine Gleiser";
  this.Telefone="11111-11111";
  this.CPF="111.111.111-44";
  this.Idade= 32;
  this.Email="tarine@gmail.com"
 
}

