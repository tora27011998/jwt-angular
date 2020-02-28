import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: '';
  username: '';
  password: '';

  constructor(private _myservice: MyserviceService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  register() {
    this._myservice.submitRegister({email: this.email, username: this.username, password: this.password}).subscribe(
      data => console.log('register work'),
      err => console.log('register not work')
    );
  }

  moveToLogin() {
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute});
  }
}
