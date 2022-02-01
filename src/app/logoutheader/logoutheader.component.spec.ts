import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutheaderComponent } from './logoutheader.component';

describe('LogoutheaderComponent', () => {
  let component: LogoutheaderComponent;
  let fixture: ComponentFixture<LogoutheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
