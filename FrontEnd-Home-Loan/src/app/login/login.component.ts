import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface user {
  username: string;
  password: string;
  
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  u: user = {
    username: '',
    password: '',
   
  };
  username = '';
  password = '';
  constructor(private router: Router) {}
  ngOnInit() {}
  login(u) {
    console.log('login called');
    console.log(u.username, u.password);

    if (u.username === 'admin' && u.password === 'admin') {
      console.log('in admin');
      sessionStorage.setItem('role', 'admin');
      this.router.navigateByUrl('role/admin/admindash');
    }

    if (u.username === 'se' && u.password === 'se') {
      console.log('in sales');
      sessionStorage.setItem('role', 'se');
      this.router.navigateByUrl('role/se/customerenq');
    }

    if (u.username === 'account' && u.password === 'account') {
      console.log('in account');
      sessionStorage.setItem('role', 'acc');
      this.router.navigateByUrl('role/acc/ledgerform');
    }
    if (u.username === 'oe' && u.password === 'oe') {
      sessionStorage.setItem('role', 'oe');
      this.router.navigateByUrl('role/oe/viewcustomer');
    }
    if (u.username === 'cm' && u.password === 'cm') {
      sessionStorage.setItem('role', 'cm');
      this.router.navigateByUrl('role/cm/creditmanager');
    }
  }
  callToRegister() {

    this.router.navigate(['register']);
  }
}
