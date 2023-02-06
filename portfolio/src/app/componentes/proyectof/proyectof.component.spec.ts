import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectofComponent } from './proyectof.component';

describe('ProyectofComponent', () => {
  let component: ProyectofComponent;
  let fixture: ComponentFixture<ProyectofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
