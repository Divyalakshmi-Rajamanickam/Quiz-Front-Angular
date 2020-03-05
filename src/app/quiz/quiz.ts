export class Quiz{
    question:string;
    answer1:string;
    answer2:string;
    answer3:string;
    answer4:string;
    questionLevel:Number;
    correctAnswer:String

    constructor(question,answer1,answer2,answer3,answer4,questionLevel,correctAnswer){
        this.question=question;
        this.answer1=answer1;
        this.answer2=answer2;
        this.answer3=answer3;
        this.answer4=answer4;
    }
}