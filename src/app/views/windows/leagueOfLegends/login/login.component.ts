import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    user: new FormControl('')
  }) 
  
  constructor() { }

  ngOnInit(): void {
  }

  newLogin() {
    
    console.log(this.login.value.user)
  
  }

}
