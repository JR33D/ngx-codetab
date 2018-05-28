import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-codebox',
  templateUrl: './codebox.component.html',
  styleUrls: ['./codebox.component.scss']
})
export class CodeboxComponent {
    @Input() public title: string;
    @Input() public language: string;
    @Input() public source: string;
}
