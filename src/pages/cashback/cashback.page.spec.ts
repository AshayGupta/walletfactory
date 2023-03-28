import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CashbackPage } from './cashback.page';

describe('CashbackPage', () => {
  let component: CashbackPage;
  let fixture: ComponentFixture<CashbackPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashbackPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CashbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
