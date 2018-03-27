import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clientes$: Observable<Cliente[]>;

  constructor(
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
    this.clientes$ = this.clienteService.data.valueChanges();
  }

}
