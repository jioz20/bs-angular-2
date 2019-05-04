import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowComponent } from './github-follow.component';

describe('GithubFollowComponent', () => {
  let component: GithubFollowComponent;
  let fixture: ComponentFixture<GithubFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
