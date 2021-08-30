import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineErrorMsgComponent } from './inline-error-msg.component';

describe('InlineErrorMsgComponent', () => {
  let component: InlineErrorMsgComponent;
  let fixture: ComponentFixture<InlineErrorMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineErrorMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineErrorMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
