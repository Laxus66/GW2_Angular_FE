import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicPageDetailComponent } from './comic-page-detail.component';

describe('ComicPageDetailComponent', () => {
  let component: ComicPageDetailComponent;
  let fixture: ComponentFixture<ComicPageDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicPageDetailComponent]
    });
    fixture = TestBed.createComponent(ComicPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
