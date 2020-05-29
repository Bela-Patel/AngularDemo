import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//import { Helpers } from './helpers/helpers';
import { NgxSpinnerService } from "ngx-spinner";
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

    constructor(private spinner: NgxSpinnerService) { }

    ngOnInit() {
        /** spinner starts on init */
        this.spinner.show();

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 5000);
    }
}
