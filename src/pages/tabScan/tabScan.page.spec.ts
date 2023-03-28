import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabScanPage } from './tabScan.page';

describe('TabScanPage', () => {
  let component: TabScanPage;
  let fixture: ComponentFixture<TabScanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabScanPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
