import { Component, OnInit } from '@angular/core';
import { MessageService } from 'app/services/messages/message.service';
import { PaperService } from 'app/services/papers.service';

import { PaperModel } from '../../models/paper/paper.model';


@Component({
  selector: 'table-cmp',
  moduleId: module.id,
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.css']

})

export class TableComponent implements OnInit {
  filteredString:String='';
  paper: PaperModel = {};
  papers: PaperModel[] = [];
  ngOnInit() {
    this.getPapers();

  }
  constructor(
    private PaperService: PaperService,
    private MessageService: MessageService,
  
    ) { }
  // obtiene un registro de la base de datos
  getPaper(Paper: PaperModel) {
    this.PaperService.getOne(Paper.id).subscribe(
      response => {
        // console.log(response.data);
        this.paper = response.data;
      }, error => {
        this.MessageService.error(error);
      }
    );
  }
  //obtiene todos los registro de la base de datos
  getPapers() {
    this.PaperService.getAll().subscribe(
      response => {
        this.getPaper(response.data[0]);

        this.papers = response.data;
        // console.log(typeof this.paper);
        // console.log(this.paper);
      }, error => {
        this.MessageService.error(error);
      }
    );
  }

}
