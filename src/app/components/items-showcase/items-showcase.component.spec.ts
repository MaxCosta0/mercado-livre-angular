import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsShowcaseComponent } from './items-showcase.component';

describe('ItemsShowcaseComponent', () => {
  let component: ItemsShowcaseComponent;
  let fixture: ComponentFixture<ItemsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
