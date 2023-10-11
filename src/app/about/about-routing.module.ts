import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollegeComponent } from './components/college/college.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {
    path: '',
    component: CollegeComponent,
    pathMatch: 'full',
    data: { main: true }
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: { state: 'coursesCollege' }
  },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent,
    data: { state: 'teachersCollege' }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { state: 'contactsCollege' }
  }
  // { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
