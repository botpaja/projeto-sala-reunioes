import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaListaComponent } from './sala-lista.component';

describe('SalaListaComponent', () => {
  let component: SalaListaComponent;
  let fixture: ComponentFixture<SalaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
