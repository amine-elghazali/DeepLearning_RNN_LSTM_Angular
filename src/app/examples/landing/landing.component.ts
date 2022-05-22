import { Component, OnInit } from '@angular/core';
import { ModelService } from 'app/services/model.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(
    private modelService: ModelService
  ) { }

  ngOnInit() {
  }


  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
