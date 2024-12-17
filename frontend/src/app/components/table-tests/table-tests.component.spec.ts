import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTestsComponent } from './table-tests.component';

describe('TableTestsComponent', () => {
  let component: TableTestsComponent;
  let fixture: ComponentFixture<TableTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
