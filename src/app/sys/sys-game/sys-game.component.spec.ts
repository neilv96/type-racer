import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysGameComponent } from './sys-game.component';

describe('SysGameComponent', () => {
  let component: SysGameComponent;
  let fixture: ComponentFixture<SysGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
