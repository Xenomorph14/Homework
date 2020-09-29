import Test from "./Test.js";
import ChoiceQuestion from "./ChoiceQuestion.js";
import TextQuestion from "./TextQuestion.js";

export default class App
{
    tests;
    questions;
    constructor()
    {
        this.tests=[];
        this.questions=[];
    }
    addTest()
    {
        let name=prompt("input your test name");
        let duration=Number(prompt("Input test duration"));
        let test= new Test(name,duration);
        this.tests.push(test);

        return this.test;
    }
    updateTest()
    {
        let id=prompt("Input your test id to update");
        let newName=prompt("Input new name");
        let newDuration=prompt("Input new duration");

        let foundTest=this.tests.find(function(test){
            return test.id==id;
        });

        if(foundTest !=null)
        {
            console.log(typeof foundTest);
            
            foundTest.update(newName,newDuration);
        }
    }
    addQuestion()
    {
        let type=prompt("Input question type");
        let content=prompt("Input question content");
        let correct=prompt("Input question correct answer");
        let question=null;

        if(type=="choice")
        {
            question=new ChoiceQuestion(content,correct);

        }else if(type=="text")
        {
            question=new TextQuestion(content,correct);
        }

        if(question !=null)
        {
            this.questions.push(question);
        }
    }

}