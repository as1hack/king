import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantriListComponent } from './jantri-list.component';

describe('JantriListComponent', () => {
  let component: JantriListComponent;
  let fixture: ComponentFixture<JantriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JantriListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JantriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
