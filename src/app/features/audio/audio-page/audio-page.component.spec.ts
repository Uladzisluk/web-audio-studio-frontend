import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPageComponent } from './audio-page.component';

describe('AudioPageComponent', () => {
  let component: AudioPageComponent;
  let fixture: ComponentFixture<AudioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudioPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
