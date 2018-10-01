import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpservComponent } from './httpserv.component';

describe('HttpservComponent', () => {
  let component: HttpservComponent;
  let fixture: ComponentFixture<HttpservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
