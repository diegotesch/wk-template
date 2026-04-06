import { Component } from '@angular/core';
import { Header } from './../../core/layout/header/header';
import { Footer } from './../../core/layout/footer/footer';
import { Hero } from '../../shared/components/hero/hero';
import { About } from '../../shared/components/about/about';
import { Services } from '../../shared/components/services/services';
import { CaseStudies } from '../../shared/components/case-studies/case-studies';
import { Projects } from '../../shared/components/projects/projects';
import { Contact } from '../../shared/components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Hero, About, Services, CaseStudies, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class Home {

}
