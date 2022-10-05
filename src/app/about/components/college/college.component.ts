import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

import { AboutInterface } from '../../about.interface';
import { COLLEGE_ABOUT$ } from '../../about.providers';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollegeComponent implements OnInit {
  college?: AboutInterface;
  isLoading = true;

  protected destroyedSubject = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>
  ) {

  }

  ngOnInit(): void {

    this.getCollege();
  }

  getCollege(): void {

    this.college$
      .pipe(
        takeUntil(this.destroyedSubject),
        finalize(() => {
          this.isLoading = false;
          this.cdr.markForCheck();
        })
      ).subscribe(college => {
        this.college = college;
    });
  }
}
