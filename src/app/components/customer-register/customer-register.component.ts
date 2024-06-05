import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-register',
  standalone: true,
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.css',
  imports: [FormsModule]
})
export class CustomerRegisterComponent {
  customer: Customer;

  constructor(private customerService: CustomerService) {
    this.customer = new Customer('', '', '', '', '', '', '', '', '');
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  onSearchButton() {
    this.customerService.searchCep(this.customer.cep).subscribe({
      next: data => {
        this.customer.endereco = data.logradouro;
        this.customer.cidade = data.localidade;
        this.customer.estado = data.uf;
      },
      error: error => {
        console.error('Erro ao buscar CEP', error);
      }
    });
  }
}