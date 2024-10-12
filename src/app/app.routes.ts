import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';

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
        path:'curso',
        component: CursoComponent
        }
     ]
    }
];
