import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubCategoriesComponent } from './menu-sub-categories.component';

describe('MenuSubCategoriesComponent', () => {
  let component: MenuSubCategoriesComponent;
  let fixture: ComponentFixture<MenuSubCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSubCategoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
