import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupHeaderComponent } from './login-signup-header.component';

describe('LoginSignupHeaderComponent', () => {
  let component: LoginSignupHeaderComponent;
  let fixture: ComponentFixture<LoginSignupHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignupHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginSignupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
