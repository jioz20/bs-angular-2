import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouresComponent } from './coures.component';

describe('CouresComponent', () => {
  let component: CouresComponent;
  let fixture: ComponentFixture<CouresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
