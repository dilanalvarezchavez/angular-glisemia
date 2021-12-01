import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { PaperModel } from '../../models/paper/paper.model'
import { MessageService } from 'app/services/messages/message.service';
import { PaperService } from 'app/services/papers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/Auth/auth.service';
import { UserModel } from 'app/models/user/user.model';




@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  // variables que guardan los datos recuperados de la BD e instacian el formulario
  paper: PaperModel = {};
  usuario: UserModel;
  papers: PaperModel[] = [];
  Updated: boolean = false;
  PaperForm: FormGroup;
  selectedPapers: PaperModel[] = [];
  // se cargan las dependencias y se inicializa el formulario
  constructor(
    private user: AuthService,
    private formBuilder: FormBuilder,
    private PaperService: PaperService,
    private MessageService: MessageService,
  ) {
    this.PaperForm = this.newFormPaper();
    this.usuario = this.user.usuario;
  }

  // da forma al formulario que manejara los datos
  newFormPaper(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      user_id: [this.user.user.id],
      dia: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      ayunas: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],

      nph_lantus: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      rapida_ultra_rap: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],

      media_manana: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      rapida_ultra_rap_m: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],

      almuerzo: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      rapida_ultra_rap_a: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],

      media_tarde: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      rapida_ultra_rap_t: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],

      merienda: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      rapida_ultra_rap_md: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      nph_lantus_md: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],

      dormir: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      madrugada: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      correcion_total: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],


    });
  }

  ngOnInit(): void {
    this.getPapers();
    //this.getPaper();
  }

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
  // obtiene todos los registro de la base de datos
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

  // crea un nuevo registro en la base de datos
  storePaper(paper: PaperModel) {
    console.log("storePaper");
    this.PaperService.Store(paper).subscribe(

      response => {
        this.Updated = false;
        this.PaperForm = this.newFormPaper();
        this.savePaper(response.data);
        this.MessageService.success(response);
      },
      error => {
        this.MessageService.error(error);
      }
    );
  }
  //actualizar un registro de la base de datos
  updatePaper(paper: PaperModel): void {
    this.PaperService.Update(paper.id, paper).subscribe(
      response => {
        this.Updated = false;
        this.PaperForm = this.newFormPaper();
        this.savePaper(response.data);
        this.MessageService.success(response);
      },
      error => {
        this.MessageService.error(error)
      }
    );
  }
  //elimina un registro de la base de datos
  // deletePaper(paper: PaperModel) {
  //   this.PaperService.destroy(paper.id).subscribe(
  //     response => {
  //       console.log(response);
  //       this.removePaper(paper);
  //       this.MessageService.success(response);
  //     },
  //     error => {
  //       this.MessageService.error(error)
  //     }
  //   );
  // }
  //elimina varios registro de la base de datos
  // TODO: ELIMINAR VARIOS REGISTROS
  // deletePapers() {

  //   const ids = this.deletePaper.map(element => element.id);
  //   this.PaperService.destroys(ids).subscribe(
  //     response => {
  //       this.removePaper(ids);
  //       this.MessageService.success(response);
  //     },
  //     error => {
  //       this.MessageService.error(error);
  //     }
  //   );
  // }
  // carga la informacion del registro en el formulario
  selectPaper(Paper: PaperModel) {
    this.Updated = true;
    this.PaperForm.patchValue(Paper);
  }
  //elimina visualmente un registro de la pantalla


  //removePaper(Paper: PaperModel) {
  //this.paper = this.paper.filter(element => element.id !== Paper.id);
  //}

  //elimina visualmente varios registros de la pantalla
  // removePapers(ids: (number | undefined)[]) {
  //   for (const id of ids) {
  //     this.paper = this.paper.filter(element => element.id !== id);
  //   }
  // }
  //se usa para actualizar o para agregar un registro a la pantalla
  savePaper(Paper: PaperModel) {
    const index = this.papers.findIndex(element => element.id === Paper.id);
    if (index === -1) {
      this.papers.push(Paper);
    } else {
      this.papers[index] = Paper;
    }
  }

  onSubmit() {
    if (this.PaperForm.valid) {
      if (this.idField.value) {
        this.updatePaper(this.PaperForm.value);
      } else {
        this.storePaper(this.PaperForm.value);
      }
    } else {
      this.PaperForm.markAllAsTouched();
    }
  }//metodo para cancelar






  onCancel() {
    this.Updated = false;
    this.PaperForm.reset();
    this.PaperForm = this.newFormPaper();
  }
  //getters
  get idField() {
    return this.PaperForm.controls['id'];
  }
  get diaField() {
    return this.PaperForm.controls['dia'];
  }
  get coreccionesField() {
    return this.PaperForm.controls['correciones'];
  }

}

