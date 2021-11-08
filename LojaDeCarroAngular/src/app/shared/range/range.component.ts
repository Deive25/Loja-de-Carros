import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChangeContext, LabelType, Options } from 'ng5-slider';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css'],
})
export class RangeComponent implements OnInit {
  ngOnInit(): void {
    this.atualizaOptions(this.options);
  }

  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() msgMin: string;
  @Input() msgMax: string;
  @Input() corBarra: string;

  @Output() defineValores = new EventEmitter();

  setValores(valor: any) {
    console.log(valor);
  }
  getChangeContextString(changeContext: ChangeContext): string {
    return `${changeContext.value} ${changeContext.highValue}`;
  }

  atualizaValores(changeContext: ChangeContext): void {
    const valor = this.getChangeContextString(changeContext).split(" ");

    this.defineValores.emit(valor);

  }

  options: Options = {
    floor: 0,
    ceil: 0,
    getPointerColor: () => {
      return 'black';
    },
    getSelectionBarColor: () => {
      return this.corBarra;
    },

    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>' + this.msgMin + ' </b>' + value;
        case LabelType.High:
          return '<b>' + this.msgMax + ' </b>' + value;
        default:
          return 'R$' + value;
      }
    },
  };

  atualizaOptions(options: Options) {
    options.floor = this.minValue;
    options.ceil = this.maxValue;
    
  }
}
