import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() title: string = 'Engenheiro Mecânico Especialista em Engenharia Legal';
  @Input() subtitle: string = 'Especialista em soluções técnicas para análise, perícia e validação de projetos';
}
