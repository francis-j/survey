import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../models/Survey';
import { Page } from '../models/Page';
import { AppService } from '../app.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

    survey: Survey;
    currentPageIndex: number;
    currentPage: Page;
    pageCount: number;

    constructor(private service: AppService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                let id = params["id"];
                this.service.getSurvey(id)
                    .subscribe(
                    result => this.setSurvey(result),
                    error => this.service.getSurveyLocal(id)
                        .subscribe(
                        result => this.setSurvey(result),
                        error => this.displayError(error)
                        )
                    );
            });
    }

    private setSurvey(result) {
        this.survey = result;
        this.pageCount = this.survey.pages.length;
    }

    private displayError(error) {
        console.log(error);
    }

    start() {
        this.currentPageIndex = 0;
        this.currentPage = this.survey.pages[this.currentPageIndex];
    }

    next() {
        if (this.currentPageIndex < this.pageCount - 1) {
            //todo: save responses
    
            this.currentPageIndex++;
            this.currentPage = this.survey.pages[this.currentPageIndex];
        }
    }

    back() {
        if (this.currentPageIndex > 0) {
            //todo: save responses

            this.currentPageIndex--;
            this.currentPage = this.survey.pages[this.currentPageIndex];
        }
    }

    submit() {
        //todo: show modal results
    }
}
