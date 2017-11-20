import { Page } from "./Page";

export class Survey {
    id: number;
    title: string;
    description: string;
    pages: Array<Page>
}