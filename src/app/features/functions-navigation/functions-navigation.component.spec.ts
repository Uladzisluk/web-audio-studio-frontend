import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsNavigationComponent } from './functions-navigation.component';

describe('FunctionsNavigationComponent', () => {
  let component: FunctionsNavigationComponent;
  let fixture: ComponentFixture<FunctionsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctionsNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
