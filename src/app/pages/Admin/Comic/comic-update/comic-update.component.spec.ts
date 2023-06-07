import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicUpdateComponent } from './comic-update.component';

describe('ComicUpdateComponent', () => {
  let component: ComicUpdateComponent;
  let fixture: ComponentFixture<ComicUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicUpdateComponent]
    });
    fixture = TestBed.createComponent(ComicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
