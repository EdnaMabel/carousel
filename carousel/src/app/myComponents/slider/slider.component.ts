import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images = [1, 2, 3, 4].map((n) => `src/assets/img${n}/900/500`);

  constructor() { }

  ngOnInit() {
  }

}
