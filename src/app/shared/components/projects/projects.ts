import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    { id: 1, title: 'Projeto 1', description: 'Descrição do projeto 1', image: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2025/07/blog_cover_business_etapas_projecto.jpg' },
    { id: 2, title: 'Projeto 2', description: 'Descrição do projeto 2', image: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2025/07/blog_cover_business_etapas_projecto.jpg' },
    { id: 3, title: 'Projeto 3', description: 'Descrição do projeto 3', image: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2025/07/blog_cover_business_etapas_projecto.jpg' },
    { id: 4, title: 'Projeto 4', description: 'Descrição do projeto 4', image: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2025/07/blog_cover_business_etapas_projecto.jpg' },
  ];
}
