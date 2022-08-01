import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HomeSvgComponent } from '../home/home.component';
import { TutorSvgComponent } from '../tutor/tutor.component';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
})
export class SvgComponent {

  @Input() color: string = '#94A3B8';
  @Input() name: string = 'home';

}

@NgModule({
  imports: [CommonModule],
  exports: [SvgComponent],
  declarations: [SvgComponent, HomeSvgComponent, TutorSvgComponent],
  providers: [],
})
export class SvgModule { }
