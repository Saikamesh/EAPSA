import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitScreenComponent } from './exit-screen.component';

describe('ExitScreenComponent', () => {
  let component: ExitScreenComponent;
  let fixture: ComponentFixture<ExitScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExitScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
