import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <p class="p-5  fs-2 back">
      inline template and css example
    </p>
  `,
  styles: [`
    .back{
      color:blue;
      background-color: pink
    }`
  ]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
