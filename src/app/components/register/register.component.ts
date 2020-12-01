import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Register } from '../../models/register.model';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [GeneralService]
})
export class RegisterComponent implements OnInit {

  register: Register;
  status: string;
  title: string;
  programs: any[];
  param1: any;

  constructor(
    private _generalService: GeneralService
  ) {
    this.title = "Registrese!";
    this.register = new Register("", "", "", "", "", "");
  }

  ngOnInit(): void {
    this.getPrograms();

    $('#name, #family_name').bind('keypress', function (event) {
      var regex = new RegExp("^[0-9a-zA-Z \b]+$");
      var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    });

    $('#phone').bind('keypress', function (event) {
      var regex = new RegExp("^[0-9]+$");
      var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    });
  }

  onSubmit(registerForm) {
    this._generalService.register(this.register).subscribe(
      response => {
        this.status = 'success';
        registerForm.reset();
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    )
  }

  getPrograms() {
    this._generalService.getPrograms().subscribe(
      response => {
        this.programs = response;

        const uniquePrograms = [];
        //Filtro de datos en el select del registro
        this.programs.forEach(elem => {
          if (!uniquePrograms.find(param => elem.id == param.id)) {
            uniquePrograms.push(elem);
          }
          this.programs = uniquePrograms;
        });
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);

        if (errorMessage != null) {
          this.status = 'error';
        }
      });
  }

}
