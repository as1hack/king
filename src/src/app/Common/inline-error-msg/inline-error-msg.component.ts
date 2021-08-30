import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inline-error-msg',
  templateUrl: './inline-error-msg.component.html',
  styleUrls: ['./inline-error-msg.component.scss']
})
export class InlineErrorMsgComponent implements OnInit {
   public error_msg : string[] = [];
  @Input() public error_type !: string;
  public iconClass !: string
  constructor() {
    this.error_type = this.error_type ? this.error_type : 'WARNINGS';
   }

  ngOnInit(): void {
    this.error_msg.push('You have error from server')
    if (this.error_type === 'INFORMATION') {
      this.iconClass = 'glyphicon glyphicon-info-sign';
    } else if (this.error_type === 'WARNINGS') {
      this.iconClass = 'glyphicon glyphicon-warning-sign';
    } else if (this.error_type === 'ERROR') {
      this.iconClass = 'glyphicon glyphicon-remove-sign';
    }
  }

}
