import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import {COURSES} from '../mock-courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course:Course = {
    id:1,
    name:'MCV4U'
  };
  
  courses = COURSES;

  constructor() { }

  ngOnInit(): void {
  }

  selectedCourse?: Course;
  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

}

