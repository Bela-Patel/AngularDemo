import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Key } from 'protractor';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    constructor(private router: Router, private workoutService: WorkoutService) { }

    loginData: FormGroup;

    ngOnInit() {
        this.loginData = new FormGroup({
            userName: new FormControl(),
            password: new FormControl()
        })
    }

    public loginSubmit() {
        this.workoutService.login(this.loginData.value).subscribe((res: any) => {
            if (this.loginData.value.userName != "" && this.loginData.value.password != "") {
                window.localStorage.setItem('access_token', res.token);
                this.router.navigate(['/grid']);
            }
            else {
                window.alert('Invalid credentials.');
                window.localStorage.removeItem("access_token");
                this.router.navigate(['/']);
            }
        });
    }

    public getToken() {
        return localStorage.getItem('access_token');
    }

}
