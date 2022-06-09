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

  getCourses(): Observable<Course[]> {
    const course = of(COURSES);
    this.messageService.add('CourseService: fetched course');
    return course;
  }

  getCourse(id: number): Observable<Course> {
    const course = COURSES.find(c => c.id === id)!;
    this.messageService.add(`CourseService: fetched course id=${id}`);
    return of(course);
  }
}
