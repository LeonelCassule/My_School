import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses/courses.component';

export const routes: Routes = [

  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  },

  {
    path:'login',
    component: LoginComponent
  },

    {
      path:'',
      component: HomeComponent,

      children:[
        {
        path:'courses',
        component: CoursesComponent
        }
     ]
    }
];
