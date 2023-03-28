import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BillpayPage } from './billpay.page';

describe('BillpayPage', () => {
  let component: BillpayPage;
  let fixture: ComponentFixture<BillpayPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillpayPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BillpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
