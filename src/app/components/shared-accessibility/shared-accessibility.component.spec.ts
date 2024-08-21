import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAccessibilityComponent } from './shared-accessibility.component';

describe('SharedAccessibilityComponent', () => {
  let component: SharedAccessibilityComponent;
  let fixture: ComponentFixture<SharedAccessibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedAccessibilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
