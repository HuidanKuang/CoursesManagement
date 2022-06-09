import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { MessageService } from '../message.service';

import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  selectedCourse?: Course;
  courses:Course[] = [];

  constructor(private courseService: CourseService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getCourses;
  }

  
  onSelect(course: Course): void {
    this.selectedCourse = course;
    this.messageService.add(`CoursesComponent: Selected course id=${course.id}`);
  }

  getCourses(): void {
    this.courseService.getCourses()
        .subscribe(courses => this.courses = courses);
  }

}

