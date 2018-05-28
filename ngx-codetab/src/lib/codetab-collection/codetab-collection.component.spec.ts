import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTabCollectionComponent } from './codetab-collection.component';

describe('CodetabCollectionComponent', () => {
  let component: CodeTabCollectionComponent;
  let fixture: ComponentFixture<CodeTabCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeTabCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTabCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
