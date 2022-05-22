import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name : string = '';
  username : string = '';
  password : string = '';



  constructor( private route : Router) { }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.name = '';
  }

  signup() {

    

  

  }

}