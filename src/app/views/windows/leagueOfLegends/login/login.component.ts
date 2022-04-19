import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    user: new FormControl('')
  }) 
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newLogin() {
    
    console.log(this.login.value.user)

    this.router.navigate(['system/LeagueOfLegends/client'])
  
  }

}
