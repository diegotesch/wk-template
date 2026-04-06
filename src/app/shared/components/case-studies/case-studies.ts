import { Component } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  imports: [],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.scss',
})
export class CaseStudies {
  cases = [
    { id: 1, problem: 'Problema 1', solution: 'Solução 1', result: 'Resultado 1' },
    { id: 2, problem: 'Problema 2', solution: 'Solução 2', result: 'Resultado 2' },
    { id: 3, problem: 'Problema 3', solution: 'Solução 3', result: 'Resultado 3' },
    { id: 4, problem: 'Problema 4', solution: 'Solução 4', result: 'Resultado 4' },
    { id: 5, problem: 'Problema 5', solution: 'Solução 5', result: 'Resultado 5' },
    { id: 6, problem: 'Problema 6', solution: 'Solução 6', result: 'Resultado 6' },
  ];
}
