import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Course } from '../../../../interfaces/course.interface';
import { COURSES_LIST$ } from '../courses/courses.providers';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy()
export class CourseDetailsComponent implements OnInit {

  course: Course;

  constructor(
    private ar: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    @Inject(COURSES_LIST$) readonly courses$: Observable<Course[]>
  ) {
  }

  ngOnInit(): void {

    combineLatest([this.ar.params, this.courses$])
      .pipe(
        untilDestroyed(this),
        map(([params, courses]) => courses.filter(course => course.id === params.id))
      )
      .subscribe(response => {
        this.course = response[0];
        this.cdr.markForCheck();
      });
  }

}
