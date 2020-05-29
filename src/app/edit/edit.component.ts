import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    id: number;
    updateStudent: FormGroup;

    @Output() studentCreated = new EventEmitter<any>();
    @Input() studentInfo: any;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private workoutService: WorkoutService) {
    }

    ngOnInit(): void {
        this.updateStudent = new FormGroup({
            StudentName: new FormControl(),
            RollNumber: new FormControl(),
            Age: new FormControl(),
            Gender: new FormControl(),
            EmailId: new FormControl(),
            StudentId: new FormControl()
        })
        this.route.params.subscribe(
            params => {
                this.id = +params['id'];
            })

        this.workoutService.getByID(this.id).subscribe((data: any) => {
            this.updateStudent.controls['StudentName'].setValue(data['StudentName']);
            this.updateStudent.controls['RollNumber'].setValue(data['RollNumber']);
            this.updateStudent.controls['Age'].setValue(data['Age']);
            this.updateStudent.controls['Gender'].setValue(data['Gender']);
            this.updateStudent.controls['StudentId'].setValue(data['StudentId']);
            this.updateStudent.controls['EmailId'].setValue(data['EmailId']);
        });
    }

    clearStudentInfo() {
        this.updateStudent = new FormGroup({
            StudentName: new FormControl(),
            RollNumber: new FormControl(),
            Age: new FormControl(),
            Gender: new FormControl(),
            EmailId: new FormControl(),
            StudentId: new FormControl()
        })
    };

    public addOrUpdateStudentRecord() {
        this.workoutService.update(this.updateStudent.value).subscribe(() => {
        });
        this.router.navigate(['/grid']);
        //this.clearEmployeeInfo();

    };

}
