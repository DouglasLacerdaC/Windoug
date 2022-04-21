import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('user') user: any
  @ViewChild('buttonLogin') buttonLogin: any
  
  login = new FormGroup({
    user: new FormControl('')
  }) 
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newLogin() {

    if(this.login.value.user.length > 0) {

      const user = this.login.value.user

      localStorage.setItem('user', user)
      
      this.router.navigate(['system/LeagueOfLegends/home'])

    }
  
  }

  controlInput() {

    if(this.login.value.user.length > 0) {
      
      this.user.nativeElement.classList.add('input-checked')
      this.buttonLogin.nativeElement.style.display = 'flex'
      
    } else {

      this.user.nativeElement.classList.remove('input-checked')
      this.buttonLogin.nativeElement.style.display = 'none'

    }

  }

}
