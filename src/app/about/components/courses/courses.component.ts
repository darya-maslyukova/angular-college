import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import { Course } from '../../../../interfaces/course.interface';
import { COURSES_LIST$ } from './courses.providers';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent {

  constructor(
    @Inject(COURSES_LIST$) readonly courses$: Observable<Course[]>
  ) { }
}
