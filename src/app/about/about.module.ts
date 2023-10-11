import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { collegeReferences } from '../../fixtures/data/college.fixtures';

import { AboutRoutingModule } from './about-routing.module';
import { COLLEGE_ABOUT$ } from './about.providers';
import { CollegeComponent } from './components/college/college.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const college = collegeReferences;

@NgModule({
  declarations: [
    CollegeComponent,
    CoursesComponent,
    TeachersComponent,
    ContactsComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  providers: [{ provide: COLLEGE_ABOUT$, useValue: new BehaviorSubject(college) }]
})
export class AboutModule {
}
