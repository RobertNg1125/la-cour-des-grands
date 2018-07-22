import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTeaserComponent } from './player-teaser.component';

describe('PlayerTeaserComponent', () => {
  let component: PlayerTeaserComponent;
  let fixture: ComponentFixture<PlayerTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
