import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}

  constructor(public accountService : AccountService) { }

  ngOnInit(): void {
  }

  login() {
    // Un observable es lazy y no hace nada hasta que nos suscribimos
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      //this.loggedIn = true;
    }, error => {
      console.log(error)
    });
  }

  logout()
  {
    this.accountService.logout();
    //this.loggedIn = false;
  }

  // getCurrentUser()
  // {
  //   this.accountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !! user;
  //   }, error => {
  //     console.log(console.error);
  //   })
  // }
}
