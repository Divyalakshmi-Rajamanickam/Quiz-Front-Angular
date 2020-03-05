import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResultComponent } from './result/result.component';
import { QuizComponent } from './quiz/quiz.component';
import { routes} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserService } from './_service/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QuizService } from './shared/quiz.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavBarComponent,
    ResultComponent,
    QuizComponent,
    LoginComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
