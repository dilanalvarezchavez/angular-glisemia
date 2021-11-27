import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { UserModel } from '../../models/user/user.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'app/services/messages/message.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    // variables que guardan los datos recuperados de la BD e instacian el formulario
    user: UserModel = {};
    Users: UserModel[] = [];
    Updated: boolean = false;
    UserForm: FormGroup;
    selectedUsers: UserModel[] = [];
    // se cargan las dependencias y se inicializa el formulario
    constructor(private formBuilder: FormBuilder,
        private userService: UsersService,
        private messageService: MessageService,
    ) {
        this.UserForm = this.newFormUser();
    }
    // da forma al formulario que manejara los datos
    newFormUser(): FormGroup {
        return this.formBuilder.group({
            id: [null],
            name: [null, [Validators.required, Validators.maxLength(50)]],
            dni: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
            phone: [null, [Validators.required, Validators.maxLength(50)]],
            password: [null, [Validators.required, Validators.maxLength(50)]],
            role: [null, [Validators.required, Validators.maxLength(50)]]
        });
    }

    ngOnInit(): void {
        this.getUsers();
        // this.getUser();
    }
    // obtiene un registro de la base de datos
    getUser(User: UserModel) {
        this.userService.getOne(User.id).subscribe(
            response => {
                console.log(response.data);
                this.user = response.data;
            }, error => {
                this.messageService.error(error);
            }
        );
    }
    //obtiene todos los registro de la base de datos
    getUsers() {
        this.userService.getAll().subscribe(
            response => {

                this.getUser(response.data[0]);
                this.Users = response.data;
            }, error => {
                this.messageService.error(error);
            }
        );
    }

    // crea un nuevo registro en la base de datos
    storeUser(User: UserModel): void {
        this.userService.Store(User).subscribe(
            response => {
                this.Updated = false;
                this.UserForm = this.newFormUser();
                this.saveUser(response.data);
                this.messageService.success(response);
            },
            error => {
                this.messageService.error(error);
            }
        );
    }
    //actualizar un registro de la base de datos
    updateUser(User: UserModel): void {
        this.userService.Update(User.id, User).subscribe(
            response => {
                this.Updated = false;
                this.UserForm = this.newFormUser();
                this.saveUser(response.data);
                this.messageService.success(response);
            },
            error => {
                this.messageService.error(error)
            }
        );
    }
    //elimina un registro de la base de datos
    deleteUser(User: UserModel) {
        this.userService.destroy(User.id).subscribe(
            response => {
                console.log(response);
                this.removeUser(User);
                this.messageService.success(response);
            },
            error => {
                this.messageService.error(error)
            }
        );
    }
    //elimina varios registro de la base de datos
    // TODO: ELIMINAR VARIOS REGISTROS
    deleteUsers() {

        const ids = this.selectedUsers.map(element => element.id);
        this.userService.destroys(ids).subscribe(
            response => {
                this.removeUsers(ids);
                this.messageService.success(response);
            },
            error => {
                this.messageService.error(error);
            }
        );
    }
    // carga la informacion del registro en el formulario
    selectUser(User: UserModel) {
        this.Updated = true;
        this.UserForm.patchValue(User);
    }
    //elimina visualmente un registro de la pantalla
    removeUser(User: UserModel) {
        this.Users = this.Users.filter(element => element.id !== User.id);
    }
    //elimina visualmente varios registros de la pantalla
    removeUsers(ids: (number | undefined)[]) {
        for (const id of ids) {
            this.Users = this.Users.filter(element => element.id !== id);
        }
    }
    //se usa para actualizar o para agregar un registro a la pantalla
    saveUser(User: UserModel) {
        const index = this.Users.findIndex(element => element.id === User.id);
        if (index === -1) {
            this.Users.push(User);
        } else {
            this.Users[index] = User;
        }
    }
    //metodo para guardar o actualizar
    onSubmit(User: UserModel) {
        if (this.UserForm.valid) {
            if (User.id) {
                this.updateUser(User);
            } else {
                this.storeUser(User);
            }
            this.UserForm.reset();
        } else {
            this.UserForm.markAllAsTouched();
        }
    }
    //metodo para cancelar
    onCancel() {
        this.Updated = false;
        this.UserForm.reset();
        this.UserForm = this.newFormUser();
    }
    //getters
    get idField() {
        return this.UserForm.controls['id'];
    }
    get nameField() {
        return this.UserForm.controls['name'];
    }
    get dniField() {
        return this.UserForm.controls['dni'];
    }
    get phoneField() {
        return this.UserForm.controls['phone'];
    }


}
