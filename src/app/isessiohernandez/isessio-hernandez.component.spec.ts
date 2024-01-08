import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsessioHernandezComponent } from './isessio-hernandez.component';

describe('IsessioHernandezComponent', () => {
  let component: IsessioHernandezComponent;
  let fixture: ComponentFixture<IsessioHernandezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsessioHernandezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsessioHernandezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
