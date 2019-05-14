/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PseudoComponent } from './Pseudo.component';

describe('PseudoComponent', () => {
  let component: PseudoComponent;
  let fixture: ComponentFixture<PseudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
