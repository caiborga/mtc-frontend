import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsComponent } from './things.component';

describe('ThingsComponent', () => {
  let component: ThingsComponent;
  let fixture: ComponentFixture<ThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
