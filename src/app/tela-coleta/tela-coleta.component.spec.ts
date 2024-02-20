import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaColetaComponent } from './tela-coleta.component';

describe('TelaColetaComponent', () => {
  let component: TelaColetaComponent;
  let fixture: ComponentFixture<TelaColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaColetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
