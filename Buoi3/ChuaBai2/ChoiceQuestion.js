import Question from "./Question.js";

export default class ChoiceQuestion extends Question
{
    constructor(id,content,correct)
    {
        super(content,correct);
        this.id=uuid.v4();
        this.content=content;
        this.correct=correct;
    }
}