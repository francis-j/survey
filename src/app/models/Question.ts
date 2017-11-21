import { QuestionResponse } from "./QuestionResponse";
import { QuestionType } from "../enums/question-type.enum";

export class Question {
    id: number;
    number: number;
    text: string;
    responses: Array<QuestionResponse>;
    type: QuestionType;
}