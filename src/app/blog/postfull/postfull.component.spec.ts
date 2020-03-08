import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfullComponent } from './postfull.component';

describe('PostfullComponent', () => {
  let component: PostfullComponent;
  let fixture: ComponentFixture<PostfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
