import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TabScanPage } from './tabScan.page';

describe('TabScanPage', () => {
  let component: TabScanPage;
  let fixture: ComponentFixture<TabScanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabScanPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
