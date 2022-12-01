import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInformationComponent } from './home-information.component';

describe('HomeInformationComponent', () => {
  let component: HomeInformationComponent;
  let fixture: ComponentFixture<HomeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
