import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { WorkoutService } from '../workout.service';
import { Router, RouterModule } from "@angular/router";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    constructor(private fbuilder: FormBuilder, private http: HttpClient, private workoutService: WorkoutService, private router: Router) { }

    addNewStudent: FormGroup;

    addStudent() {
        this.workoutService.add(this.addNewStudent.value).subscribe(() => {
        });
        this.router.navigate(['/grid']);
    }

    ClearStudent() {
        this.addNewStudent = new FormGroup({
            StudentName: new FormControl(),
            RollNumber: new FormControl(),
            Age: new FormControl(),
            Gender: new FormControl(),
            EmailId: new FormControl()

        })
    };

    ngOnInit(): void {
        this.addNewStudent = new FormGroup({
            StudentName: new FormControl(),
            RollNumber: new FormControl(),
            Age: new FormControl(),
            Gender: new FormControl(),
            EmailId: new FormControl()
        })
    }
}
