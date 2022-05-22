import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { FeaturesComponent } from './features/features.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { KeepInTouchComponent } from './keep-in-touch/keep-in-touch.component';
import { PresasterSectionComponent } from './presaster-section/presaster-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LandingComponent,
        FeaturesComponent,
        AboutUsComponent,
        KeepInTouchComponent,
        PresasterSectionComponent,
    ],
})
export class HomeModule { }
