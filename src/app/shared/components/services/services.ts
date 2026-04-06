import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = [
    { id: 1, title: 'Perícias Técnicas', description: 'Identificação técnica de falhas em embasamento pericial' },
    { id: 2, title: 'Laudos', description: 'Documentação técnica' },
    { id: 3, title: 'Consultoria', description: 'Suporte especializado' },
  ];
}
