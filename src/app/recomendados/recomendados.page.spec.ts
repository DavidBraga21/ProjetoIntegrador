import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecomendadosPage } from './recomendados.page';

describe('RecomendadosPage', () => {
  let component: RecomendadosPage;
  let fixture: ComponentFixture<RecomendadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecomendadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
