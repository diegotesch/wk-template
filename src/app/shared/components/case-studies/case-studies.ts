import { Component } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  imports: [],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.scss',
})
export class CaseStudies {
  cases = [
    { 
      id: 1, 
      problem: 'Fissuras recorrentes em vigas de concreto em edifício residencial.', 
      solution: 'Realização de inspeção técnica detalhada, análise estrutural e recomendação de reforço com fibra de carbono.', 
      result: 'As fissuras foram eliminadas e a integridade estrutural restabelecida, evitando riscos futuros e valorizando o imóvel.' 
    },
    { 
      id: 2, 
      problem: 'Infiltração excessiva no subsolo de edifício comercial causando deterioração em paredes e instalações.', 
      solution: 'Diagnóstico de falhas de impermeabilização seguido por projeto e execução de nova impermeabilização com sistema moderno.', 
      result: 'Redução total das infiltrações, garantindo durabilidade às fundações e tornando o ambiente próprio para uso comercial.' 
    },
    { 
      id: 3, 
      problem: 'Irregularidade na execução de fundação detectada durante vistoria em obra pública.', 
      solution: 'Avaliação técnica pericial, emissão de laudo técnico conclusivo e recomendação de medidas corretivas adequadas.', 
      result: 'Correção das não conformidades, aprovação dos órgãos fiscalizadores e continuidade segura da obra.' 
    },
    { 
      id: 4, 
      problem: 'Degradação precoce da fachada em condomínio devido à utilização inadequada de materiais.', 
      solution: 'Análise de desempenho dos materiais aplicados, indicação de produtos adequados e supervisão técnica da reforma.', 
      result: 'Fachada revitalizada com materiais duráveis e adequados, elevando o valor de mercado do empreendimento.' 
    },
  ];
}
