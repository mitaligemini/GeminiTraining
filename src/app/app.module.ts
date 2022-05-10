
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NabarComponent } from './nabar/nabar.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms'
import { DetailsComponent } from './details/details.component';
import { DirectiveComponent } from './directive/directive.component';
import { AddBackgroundDirective } from './add-background.directive';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { InlineComponent } from './inline/inline.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { NewComponent } from './new/new.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { RouterModule } from '@angular/router'



 @NgModule({
  declarations: [
    AppComponent,
    NabarComponent,
    FormComponent,
    DetailsComponent,
    DirectiveComponent,
    AddBackgroundDirective,
    PipeComponent,
    CustomPipePipe,
    InlineComponent,
    TemplateDrivenComponent,
    NewComponent,
    ReactiveFormComponent,
    ReactiveSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  
      
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
