import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContentProductComponent } from './side-content-product.component';

describe('SideContentProductComponent', () => {
  let component: SideContentProductComponent;
  let fixture: ComponentFixture<SideContentProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideContentProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideContentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
