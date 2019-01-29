import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroPrestamoComponent } from './libro-prestamo.component';

describe('LibroPrestamoComponent', () => {
  let component: LibroPrestamoComponent;
  let fixture: ComponentFixture<LibroPrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroPrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
