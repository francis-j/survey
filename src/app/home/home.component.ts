import { Component, OnInit } from '@angular/core';
import { Survey } from '../models/Survey';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    surveys: Array<Survey>;

    constructor(private service:AppService, private router:Router) { }

    ngOnInit() {
        this.service.getSurveys()
            .subscribe(
                result => this.setSurveys(result),
                error => this.service.getSurveysLocal().subscribe(
                    result => this.setSurveys(result),
                    error => this.displayError(error)
                )
            );
    }

    private setSurveys(result: Array<Survey>) {
        this.surveys = result;
    }

    private displayError(error) {
        console.log("error: " + error);
    }

    goSurvey(id) {
        console.log(id);
        this.router.navigate(["survey", id]);
    }

}
