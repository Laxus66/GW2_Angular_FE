import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicChapterComponent } from './comic-chapter.component';

describe('ComicChapterComponent', () => {
  let component: ComicChapterComponent;
  let fixture: ComponentFixture<ComicChapterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicChapterComponent]
    });
    fixture = TestBed.createComponent(ComicChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
