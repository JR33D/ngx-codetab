import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { NgxCodeTabModule } from 'ngx-codetab';

describe('DemoComponent', () => {
   let component: DemoComponent;
   let fixture: ComponentFixture<DemoComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [NgxCodeTabModule],
         declarations: [DemoComponent],
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DemoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
