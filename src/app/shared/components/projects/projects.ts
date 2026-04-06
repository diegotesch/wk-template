import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    { 
      id: 1, 
      title: 'Projeto industrial', 
      tag: 'Perícia Técnica', 
      description: 'Elaboração de laudos técnicos para validação e certificação de projetos industriais, fornecendo segurança jurídica e respaldo comercial em processos de licitação, aquisição ou manutenção de ativos industriais.', 
      image: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2025/07/blog_cover_business_etapas_projecto.jpg' 
    },
    {
      id: 2,
      title: 'Projeto de construção',
      tag: 'Laudo Técnico',
      description: 'Produção de laudo técnico detalhado em projetos de construção, garantindo conformidade normativa, transparência comercial e confiança em negociações imobiliárias ou contratuais.',
      image: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2025/07/blog_cover_business_etapas_projecto.jpg'
    },
    {
      id: 3,
      title: 'Análise Estrutural',
      tag: 'Consultoria em Engenharia',
      description: 'Consultoria especializada em análise estrutural para empreendimentos civis e industriais, avaliando riscos, otimizando projetos e agregando alta confiabilidade às operações comerciais.',
      image: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2025/07/blog_cover_business_etapas_projecto.jpg'
    },
    {
      id: 4,
      title: 'Avaliação de Equipamentos',
      tag: 'Inspeção Técnica',
      description: 'Serviço de inspeção técnica para avaliação de equipamentos industriais, identificando oportunidades de melhorias e assegurando o valor comercial dos ativos para compra, venda ou financiamento.',
      image: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2025/07/blog_cover_business_etapas_projecto.jpg'
    },
  ];
}
