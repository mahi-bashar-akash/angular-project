import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContentBlogComponent } from './side-content-blog.component';

describe('SideContentBlogComponent', () => {
  let component: SideContentBlogComponent;
  let fixture: ComponentFixture<SideContentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideContentBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideContentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
