import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChainComponent } from './add-chain.component';

describe('AddChainComponent', () => {
  let component: AddChainComponent;
  let fixture: ComponentFixture<AddChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
