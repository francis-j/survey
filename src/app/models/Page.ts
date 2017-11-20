import { Question } from "./Question";

export class Page {
    id: number;
    number: number;
    title: string;
    description: string;
    order: number;
    questions: Array<Question>
}