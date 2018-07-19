import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLauncherComponent } from './player-launcher.component';

describe('PlayerLauncherComponent', () => {
  let component: PlayerLauncherComponent;
  let fixture: ComponentFixture<PlayerLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
