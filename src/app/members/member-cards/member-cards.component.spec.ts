import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCardsComponent } from './member-cards.component';

describe('MemberCardsComponent', () => {
  let component: MemberCardsComponent;
  let fixture: ComponentFixture<MemberCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
