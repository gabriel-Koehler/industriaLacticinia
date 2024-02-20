import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTransitoComponent } from './tela-transito.component';

describe('TelaTransitoComponent', () => {
  let component: TelaTransitoComponent;
  let fixture: ComponentFixture<TelaTransitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaTransitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
