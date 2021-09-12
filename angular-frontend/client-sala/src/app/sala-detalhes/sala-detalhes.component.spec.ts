import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDetalhesComponent } from './sala-detalhes.component';

describe('SalaDetalhesComponent', () => {
  let component: SalaDetalhesComponent;
  let fixture: ComponentFixture<SalaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
