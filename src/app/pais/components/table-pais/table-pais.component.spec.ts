import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaisComponent } from './table-pais.component';

describe('TablePaisComponent', () => {
  let component: TablePaisComponent;
  let fixture: ComponentFixture<TablePaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
