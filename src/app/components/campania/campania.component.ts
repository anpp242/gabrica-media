import { Component, Input, OnInit,TemplateRef } from '@angular/core';
import { Campania } from '../../models/campania';
import { Global } from '../../services/global';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-campania',
  templateUrl: './campania.component.html',
  styleUrls: ['./campania.component.css']
})
export class CampaniaComponent implements OnInit {
  @Input() campania : Campania;
  public url_recursos: string;
  modalRef: BsModalRef;  

  constructor(private modalService: BsModalService) { 
    this.url_recursos = Global.url_campanias;
  }

  ngOnInit(): void {
  }

  downloadMyFile(archivo){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.url_recursos + archivo);
    link.setAttribute('download', archivo);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }  

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
