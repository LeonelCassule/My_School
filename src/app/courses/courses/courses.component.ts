import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {

  courseList: any[] = [];

  constructor(private _coursesService: CoursesService){ }

 public  ngOnInit(): void {
  this.getAllCars()
 }


  private getAllCars():void{
   this._coursesService.list()
     .subscribe((res:any)=>{
        this.courseList = res;
     });
 }


}

