import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicPageComponent } from './comic-page.component';

describe('ComicPageComponent', () => {
  let component: ComicPageComponent;
  let fixture: ComponentFixture<ComicPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicPageComponent]
    });
    fixture = TestBed.createComponent(ComicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
