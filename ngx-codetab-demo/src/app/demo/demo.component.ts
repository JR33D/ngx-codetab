import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'ngx-demo-demo',
   templateUrl: './demo.component.html',
   styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
    jsItem = { title: 'JS', language: 'javascript', source: 'alert(\'Hello World!\');', selected: true };

    phpItem = { language: 'php', source: 'echo \'Hello World!\';', selected: false };

    code = [
        this.jsItem,
        { language: 'html', source: '<p>Hello World!</p>', selected: false },
        { language: 'css', source: 'p:after { content: "Hello World"; }', selected: false },
        this.phpItem,
        { language: 'java', source: 'System.out.println("Hello World!");', selected: false },
        { title: 'C#', language: 'csharp', source: 'Console.WriteLine("Hello World!");', selected: false },
      ];
   constructor() {}

   ngOnInit() {}
}
