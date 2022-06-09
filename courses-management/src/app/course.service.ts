import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Course } from './course';
import { COURSES } from './mock-courses';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private messageService: MessageService) { }

  getCourses(): Observable<Course[]>{
    const courses = of(COURSES);
    this.messageService.add('CourseService: fetched courses');
    return courses;
  }
}
