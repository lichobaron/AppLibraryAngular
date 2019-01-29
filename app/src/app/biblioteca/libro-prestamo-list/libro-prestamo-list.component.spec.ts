import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroPrestamoListComponent } from './libro-prestamo-list.component';

describe('LibroPrestamoListComponent', () => {
  let component: LibroPrestamoListComponent;
  let fixture: ComponentFixture<LibroPrestamoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroPrestamoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroPrestamoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
