import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ModelService } from 'app/services/model.service';
import { ModelResult } from '../model/model_result';

@Component({
  selector: 'app-presaster-section',
  templateUrl: './presaster-section.component.html',
  styleUrls: ['./presaster-section.component.css']
})
export class PresasterSectionComponent implements OnInit {

  urlRegEx =
    '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})'

  errorMessage?: string

  modelResult?: ModelResult

  waiting: boolean = false
  lastResult: boolean = false

  final_text?: string
  isDisaster?: any

  predictForm = new FormGroup({
    tweet_url: new FormControl('', {
      validators: [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
    }),
  })

  constructor(
    private modelService: ModelService
  ) { }

  ngOnInit(): void {
  }

  getUrl() {
    return this.predictForm.get('tweet_url').value
  }

  getModelApi() {
    this.modelService.getEndPoint().subscribe({
      next: (res) => (console.log(res)),
      error: (e) => (console.log(e))
    })
  }


  handleSumbit() {

    if (this.predictForm.invalid) {
      this.errorMessage = "Please enter a valid URL"
      return;
    }
    else {
      this.waiting = true
      this.modelService.getPrediction(this.getUrl()).subscribe({
        next: (resp) => {
          console.log(resp.final_text)
          console.log(resp.isDisaster)

          this.final_text = resp.final_text
          this.isDisaster = resp.isDisaster
          // switch (resp.isDisaster) {
          //   case -1:
          //     this.isDisaster = -1
          //     break;
          //   case 0:
          //     this.isDisaster = 0
          //     break;
          //   case 1:
          //     this.isDisaster = DisasterDegree.sure
          //     break;

          //   default:
          //     break;
          // }

        },
        error: (e) => console.log(e),
        complete: () => {
          this.waiting = false
          this.lastResult = true
        }
      })
      // this.getModelApi()
    }

  }

}
