import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CouresComponent } from './coures/coures.component';
import { FavouriteComponent } from './favourite/favourite.component';

import { BootstrapComponent } from './bootstrap/bootstrap.component';

import { FormatInputDirective } from './format-input.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupComponent } from './signup/signup.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { GithubFollowComponent } from './github-follow/github-follow.component';
import { LoginComponent } from './login/login.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CouresComponent,
    FavouriteComponent,
   
    BootstrapComponent,

    FormatInputDirective,
    ContactFormComponent,
    SignupComponent,
    NewCourseFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'followers', component: GithubFollowComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'followers/:username', component: GithubProfileComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
