import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { collegeReferences } from '../../fixtures/data/college.fixtures';
import { coursesReferences } from '../../fixtures/data/courses.fixtures';

import { AboutRoutingModule } from './about-routing.module';
import { COLLEGE_ABOUT$ } from './about.providers';
import { CollegeComponent } from './components/college/college.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { COURSES_LIST$ } from './components/courses/courses.providers';
import { TeachersComponent } from './components/teachers/teachers.component';

const college = collegeReferences;
const courses = coursesReferences;

@NgModule({
  declarations: [
    CollegeComponent,
    CoursesComponent,
    TeachersComponent,
    ContactsComponent,
    CourseComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  providers: [
    { provide: COLLEGE_ABOUT$, useValue: new BehaviorSubject(college) },
    { provide: COURSES_LIST$, useValue: new BehaviorSubject(courses) }
  ]
})
export class AboutModule {
}
