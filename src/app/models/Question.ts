import { QuestionResponse } from "./QuestionResponse";

export class Question {
    id: number;
    number: number;
    text: string;
    responses: Array<QuestionResponse>;
    type: number;
}