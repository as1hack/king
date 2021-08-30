import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJantriComponent } from './user-jantri.component';

describe('UserJantriComponent', () => {
  let component: UserJantriComponent;
  let fixture: ComponentFixture<UserJantriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserJantriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserJantriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
