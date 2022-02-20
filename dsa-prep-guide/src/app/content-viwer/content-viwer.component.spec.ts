import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentViwerComponent } from './content-viwer.component';

describe('ContentViwerComponent', () => {
  let component: ContentViwerComponent;
  let fixture: ComponentFixture<ContentViwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentViwerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentViwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
