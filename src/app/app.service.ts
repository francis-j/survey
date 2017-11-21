import { Survey } from "./models/Survey";
import { Http, Response, Headers, RequestOptionsArgs } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable()
export class AppService {

    private headers: Headers = new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json"
    });
    private options: RequestOptionsArgs = { headers: this.headers };

    constructor(private http: Http) { }

    getSurveys(): Observable<any> {
        return this.http
            .get(environment.api_url + "/survey", this.options)
            .map(this.getBody)
            .catch(this.logError);
    }

    getSurveysLocal(): Observable<any> {
        return this.http
            .get("assets/surveys.json")
            .map(this.getBody)
            .catch(this.logError);
    }

    getSurvey(id): Observable<any> {
        return this.http
            .get(environment.api_url + "/survey/" + id, this.options)
            .map(this.getBody)
            .catch(this.logError);
    }

    getSurveyLocal(id: number): Observable<any> {
        return this.http
            .get("assets/surveys.json")
            .map(response => {
                var surveys = this.getBody(response) as Array<Survey>;
                let survey = surveys.find(s => s.id == id);
                return survey;
            })
            .catch(this.logError);
    }

    private getBody(res: Response) {
        let body = res.json();
        return body || {};
    }

    private logError(error: any) {
        console.error("Error", error);
        return Observable.throw(error);
    }
}