import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { coursesReferences } from '../../../../fixtures/data/courses.fixtures';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$ = of(coursesReferences);

  constructor() { }

  ngOnInit() {
  }

}
