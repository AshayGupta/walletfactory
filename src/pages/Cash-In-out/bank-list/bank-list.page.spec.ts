import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BankListPage } from './bank-list.page';

describe('BankListPage', () => {
  let component: BankListPage;
  let fixture: ComponentFixture<BankListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BankListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
