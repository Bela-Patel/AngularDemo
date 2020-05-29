import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkoutService } from '../workout.service';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

    constructor(private workoutService: WorkoutService, private spinner: NgxSpinnerService) {
    }
    studentData: any;

    public getData = function () {
        this.workoutService.get().subscribe((data: any) => this.studentData = data);
    }

    deleteEmployee = function (id) {
        if (confirm("Are you sure?")) {
            this.workoutService.remove(id).subscribe();
        }
        this.ngOnInit();
    }

    ngOnInit() {
        this.spinner.show();

        setTimeout(() => {
            this.getData();
            this.spinner.hide();
        }, 5000);

    }

}
