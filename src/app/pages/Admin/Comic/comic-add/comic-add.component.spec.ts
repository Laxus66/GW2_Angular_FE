import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicAddComponent } from './comic-add.component';

describe('ComicAddComponent', () => {
  let component: ComicAddComponent;
  let fixture: ComponentFixture<ComicAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicAddComponent]
    });
    fixture = TestBed.createComponent(ComicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
