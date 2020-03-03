import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  buttonName = "Start the Quiz";
  begin = false;
  complete = false;
  questions: any;
  currentQuestion: any;
  currentIndex: number;
  score: any;
  noAnswer: any;
 
  constructor(){
    this.questions = [
      {
        id: 1,
        question: 'Question 1: XXXX1',
        option: [
          {optionid: 1, name: 'choice1'},
          {optionid: 2, name: 'choice2'},
          {optionid: 3, name: 'choice3'},
          {optionid: 4, name: 'choice4'}
        ],
        answer: 3,
        selected: 0
      },
      {
        id: 2,
        question: 'Question 2: XXX2',
        option: [
          {optionid: 1, name: 'choice1'},
          {optionid: 2, name: 'choice2'},
          {optionid: 3, name: 'choice3'},
          {optionid: 4, name: 'choice4'}
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 3,
        question: 'Question 3: XXX3',
        option: [
          {optionid: 1, name: 'choice1'},
          {optionid: 2, name: 'choice2'},
          {optionid: 3, name: 'choice2'},
          {optionid: 4, name: 'choice3'}
        ],
        answer: 4,
        selected: 0
      },
      {
        id: 4,
        question: 'Question 4: XXXX4',
        option: [
          {optionid: 1, name: 'choice1'},
          {optionid: 2, name: 'choice2'},
          {optionid: 3, name: 'choice3'},
          {optionid: 4, name: 'choice4'}
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 5,
        question: 'Question 5: XXX5',
        option: [
          {optionid: 1, name: 'choice1'},
          {optionid: 2, name: 'choice2'},
          {optionid: 3, name: 'choice3'},
          {optionid: 4, name: 'choice4'}
        ],
        answer: 2,
        selected: 0
      }
    ];
 
    this.currentIndex = 0;
    this.currentQuestion = this.questions[this.currentIndex];
   }
   
   next(){
     this.currentIndex++;
     this.currentQuestion = this.questions[this.currentIndex];
   }
 
   submit(){
     this.buttonName = "Quiz Again?";
     if (this.currentIndex + 1 == this.questions.length){
       this.complete = true;
       this.begin = false;
       this.score = 0;
       this.noAnswer = 0;
       this.questions.map(x => {
         if (x.selected != 0){
           if (x.selected == x.answer) {
             this.score++;
           }
         }
         else {
           this.noAnswer++;
         }
 
         x.selected = 0;
       });
     } 
   }
 
   start(){
     this.complete = false;
     this.currentIndex = 0;
     this.currentQuestion = this.questions[this.currentIndex];
     this.begin = true;
   }
 
}
