import { QuestionScale } from "./QuestionScale";

export class Question {
    id: number;
    number: number;
    text: string;
    scale: QuestionScale;
    type: number;
}