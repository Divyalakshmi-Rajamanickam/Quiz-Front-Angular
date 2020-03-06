import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {QuizService} from '../shared/quiz.service';
import {User} from '../login/user';



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
        question: 'Question 1: What is 9+3?',
        option: [
          {optionid: 1, name: '8'},
          {optionid: 2, name: '30'},
          {optionid: 3, name: '12'},
          {optionid: 4, name: '4'}
        ],
        answer: 3,
        selected: 0
      },
      {
        id: 2,
        question: 'Question 2: What color is the apple?',
        option: [
          {optionid: 1, name: 'Red'},
          {optionid: 2, name: 'Blue'},
          {optionid: 3, name: 'Yellow'},
          {optionid: 4, name: 'Purple'}
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 3,
        question: 'Question 3: What color word is spelled right?',
        option: [
          {optionid: 1, name: 'Bloo'},
          {optionid: 2, name: 'Bleu'},
          {optionid: 3, name: 'Blu'},
          {optionid: 4, name: 'Blue'}
        ],
        answer: 4,
        selected: 0
      },
      {
        id: 4,
        question: 'Question 4: Select the missing letter U,V,W,__,Y,Z?',
        option: [
          {optionid: 1, name: 'X'},
          {optionid: 2, name: 'R'},
          {optionid: 3, name: 'P'},
          {optionid: 4, name: 'K'}
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 5,
        question: 'Question 5: What is 3-2?',
        option: [
          {optionid: 1, name: '5'},
          {optionid: 2, name: '1'},
          {optionid: 3, name: '4'},
          {optionid: 4, name: '32'}
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
