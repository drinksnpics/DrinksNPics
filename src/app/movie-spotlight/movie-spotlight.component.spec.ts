import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSpotlightPage } from './movie-spotlight.page';

describe('MovieSpotlightPage', () => {
  let component: MovieSpotlightPage;
  let fixture: ComponentFixture<MovieSpotlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSpotlightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSpotlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
