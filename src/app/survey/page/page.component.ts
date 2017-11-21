import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../../models/Page';

@Component({
    selector: 'page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    @Input() page: Page;

    constructor() { }

    ngOnInit() {
    }

}
