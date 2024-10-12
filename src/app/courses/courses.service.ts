import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../services/Constant';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private _httpClient : HttpClient) { }

  public list(){
    return this._httpClient.
    get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CARS);
  }


  }

