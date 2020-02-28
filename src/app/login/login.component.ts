import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password: '';
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  login() {
    this._myservice.login({email: this.email, password: this.password}).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('token', data.toString());
        this._router.navigate(['/dash']);
      },
      err => {
        console.log(err);
      }
    )
  }

  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }

}
