import { Component, OnInit, Input } from '@angular/core';
import { QuestionResponse } from '../../../../models/QuestionResponse';
import { QuestionType } from '../../../../enums/question-type.enum';

@Component({
    selector: 'question-response',
    templateUrl: './question-response.component.html',
    styleUrls: ['./question-response.component.scss']
})
export class QuestionResponseComponent implements OnInit {

    @Input() questionId: number;
    @Input() response: QuestionResponse;
    @Input() questionType: QuestionType;

    constructor() { }

    ngOnInit() {
    }

}
