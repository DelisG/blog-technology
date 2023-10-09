$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $("nav").addClass("bg-light");
  } else {
    $("nav").removeClass("bg-light");
  }
});

var cards = [
  {
    imagem: "assets/images/cultura-entenda.jpg",
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
];

var verMaisBtn = document.getElementById("verMaisBtn");
var conteudoSecundario = document.getElementById("conteudoSecundario");

verMaisBtn.addEventListener("click", function () {
  if (
    conteudoSecundario.style.display === "none" ||
    conteudoSecundario.style.display === ""
  ) {
    conteudoSecundario.style.display = "block"; // Torna o conteúdo visível
  }
});

function criarCard(imagem, texto) {
  var cardHTML = `
              <div class="row mt-5 row-col-gr flex-wrap gap-3">
                      <div
                        class=" col-lg-4 card rounded-3 elevacao div-artigo">
                        <div class="card-body card-artigo">
                            <img
                                src="https://blog.bluesol.com.br/wp-content/uploads/2017/08/5-Raz%C3%B5es-Porque-a-Energia-Solar-%C3%89-De-Fato-Sustent%C3%A1vel.jpg">
                            <p class="category">Sustentabilidade</p>

                        </div>

                        <div class="p-4">
                            <h4>Energia Solar e Sustentabilidade</h4>
                            <p class="py-2">Descubra como a energia solar está impulsionando a sustentabilidade.</p>
                            <a
                                href="#"
                                class="text-decoration-none">Ver mais</a>
                        </div>
                    </div>
                    <div
                        class=" col-lg-4 card rounded-3 elevacao div-artigo">
                        <div class="card-body card-artigo">
                            <img
                                src="https://hermes.dio.me/articles/cover/88f339f2-3e37-4e33-a96a-926275c8a704.png">
                            <p class="category">Tecnologia</p>

                        </div>

                        <div class="p-4">
                            <h4>A Revolução da Inteligência Artificial (IA)</h4>
                            <p class="py-2">Explore o impacto da IA na tecnologia e na sociedade.</p>
                            <a
                                href="#"
                                class="text-decoration-none">Ver mais</a>
                        </div>
                    </div>
                    <div
                        class=" col-lg-4 card rounded-3 elevacao div-artigo">
                        <div class="card-body card-artigo">
                            <img
                                src="https://www.publi.com.br/wp-content/uploads/2020/05/x-estrategias-de-Sustentabilidade-digital-para-voce-utilizar-nas-redes-sociais-da-sua-empresa-20200427141133.jpg-1.jpg">
                            <p class="category">Saúde</p>

                        </div>

                        <div class="p-4">
                            <h4>Telemedicina e o Futuro da Saúde</h4>
                            <p class="py-2">Explore como a telemedicina está revolucionando o setor de saúde.</p>
                            <a
                                href="https://Saúderecife.com/artigo.html?titulo=Estrat%C3%A9gias%20de%20Redes%20Sociais"
                                class="text-decoration-none">Ver mais</a>
                        </div>
                    </div>
                      
              </div>
          `;
  return cardHTML;
}

function adicionarCards() {
  var cardsContainer = document.getElementById("cardsContainer");

  cards.forEach(function (card) {
    var cardHTML = criarCard(card.imagem, card.texto);
    var divCard = document.createElement("div");
    divCard.innerHTML = cardHTML;
    cardsContainer.appendChild(divCard);
  });
}

var verMaisBtn = document.getElementById("verMaisBtn");
verMaisBtn.addEventListener("click", function () {
  adicionarCards(); // Chama a função para adicionar os cards quando o botão "Ver Mais" é clicado
  verMaisBtn.style.display = "none"; // Oculta o botão "Ver Mais"
});

const artigos = [
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/jovem-usando-oculos-de-realidade-virtual_53876-14671.jpg",
    titulo: "Futuro da Realidade Virtual",
    subtitulo: "Explorando novas dimensões digitais",
    descricao:
      "Descubra as últimas inovações em realidade virtual e como ela está transformando a forma como interagimos com o mundo digital.",
    texto:
      "A realidade virtual (RV) está mudando a maneira como experimentamos e interagimos com o mundo digital. Neste artigo, mergulhamos nas últimas inovações em RV, desde jogos imersivos até aplicações educacionais. Saiba como a RV está sendo usada em diversos setores, incluindo entretenimento, medicina e treinamento corporativo. Prepare-se para uma viagem emocionante ao futuro da tecnologia de RV.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de empresas que estão liderando o caminho na RV, insights sobre o uso da RV na medicina e dicas para escolher o melhor headset de RV.",
    data: "20/04/2023",
    categoria: "Tecnologia",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/robotica-de-tecnologia-de-automacao_33353-1500.jpg",
    titulo: "Robótica Avançada",
    subtitulo: "O futuro da automação e inteligência artificial",
    descricao:
      "Explore o mundo da robótica avançada e descubra como a IA está moldando o futuro da automação.",
    texto:
      "A robótica avançada está revolucionando a maneira como realizamos tarefas em todos os setores, desde manufatura até assistência médica. Este artigo explora os avanços mais recentes em robótica e como a inteligência artificial está desempenhando um papel fundamental nesse campo em constante evolução. Descubra como robôs autônomos, aprendizado de máquina e visão computacional estão transformando nossa sociedade.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará informações detalhadas sobre os setores que estão adotando a robótica avançada, exemplos de aplicações práticas e uma visão geral das tendências futuras que moldarão o campo da robótica.",
    data: "12/11/2023",
    categoria: "Tecnologia",
  },
  {
    imagem:
      "https://image.freepik.com/fotos-gratis/profissional-de-ciberseguranca_53876-14371.jpg",
    titulo: "Cibersegurança em Ascensão",
    subtitulo: "Protegendo dados e sistemas em um mundo digital",
    descricao:
      "Explore as últimas tendências em cibersegurança e saiba como proteger seus dados.",
    texto:
      "Com a crescente dependência da tecnologia, a cibersegurança se tornou essencial. Neste artigo, analisamos as últimas tendências em segurança cibernética, desde ameaças emergentes até as melhores práticas para proteger seus dados e sistemas. Descubra como empresas e indivíduos podem se manter seguros em um mundo digital em constante evolução.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará informações detalhadas sobre ferramentas e estratégias de cibersegurança, estudos de casos de violações de dados e dicas práticas para fortalecer a segurança online.",
    data: "08/09/2023",
    categoria: "Tecnologia",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/jovem-usando-oculos-de-realidade-virtual_53876-14671.jpg",
    titulo: "Futuro da Realidade Virtual",
    subtitulo: "Explorando novas dimensões digitais",
    descricao:
      "Descubra as últimas inovações em realidade virtual e como ela está transformando a forma como interagimos com o mundo digital.",
    texto:
      "A realidade virtual (RV) está mudando a maneira como experimentamos e interagimos com o mundo digital. Neste artigo, mergulhamos nas últimas inovações em RV, desde jogos imersivos até aplicações educacionais. Saiba como a RV está sendo usada em diversos setores, incluindo entretenimento, medicina e treinamento corporativo. Prepare-se para uma viagem emocionante ao futuro da tecnologia de RV.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de empresas que estão liderando o caminho na RV, insights sobre o uso da RV na medicina e dicas para escolher o melhor headset de RV.",
    data: "20/04/2023",
    categoria: "Tecnologia",
  },
  {
    imagem: "https://img.freepik.com/fotos-gratis/criptomoedas_1194-375.jpg",
    titulo: "Criptomoedas em Destaque",
    subtitulo: "O mundo das moedas digitais",
    descricao:
      "Explore o universo das criptomoedas, incluindo Bitcoin, Ethereum e muito mais.",
    texto:
      "As criptomoedas estão cada vez mais presentes no cenário financeiro global. Neste artigo, analisamos as principais moedas digitais, como Bitcoin e Ethereum, e explicamos como elas funcionam. Descubra as oportunidades e desafios de investir em criptomoedas e como elas estão moldando o futuro das finanças.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará informações sobre tecnologia blockchain, dicas de segurança para armazenar criptomoedas e análises de tendências recentes no mercado de criptomoedas.",
    data: "03/07/2023",
    categoria: "Tecnologia",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/dispositivos-de-conexao-de-internet-das-coisas_53876-19589.jpg",
    titulo: "Internet das Coisas (IoT) e Seu Impacto na Tecnologia",
    subtitulo: "A revolução conectada",
    descricao:
      "Explore como a Internet das Coisas está transformando nosso mundo tecnológico.",
    texto:
      "A Internet das Coisas (IoT) tem sido uma das maiores revoluções tecnológicas da última década. Neste artigo, investigamos como os dispositivos conectados estão mudando nossa vida cotidiana e setores inteiros, desde a saúde até a indústria. Descubra os benefícios e desafios da IoT e como essa tecnologia está moldando nosso futuro digital.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de aplicativos da IoT em diferentes indústrias, recursos para entender melhor a IoT e considerações de segurança relacionadas à conectividade.",
    data: "20/03/2023",
    categoria: "Tecnologia",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/mulher-com-olhos-fechados-tirando-um-tempo-para-relaxar_1150-41429.jpg",
    titulo: "Bem-Estar Mental e Tecnologia na Era Digital",
    subtitulo: "Equilibrando sua saúde mental em um mundo conectado",
    descricao:
      "Explore como a tecnologia pode ser usada para melhorar o bem-estar mental.",
    texto:
      "No mundo digital de hoje, a saúde mental é uma preocupação crescente. Neste artigo, discutimos como a tecnologia está sendo aplicada para apoiar o bem-estar mental, desde aplicativos de meditação até plataformas de terapia online. Descubra como você pode usar a tecnologia de forma saudável para cuidar de sua mente e como a inovação está transformando o campo da saúde mental.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de aplicativos e recursos relacionados ao bem-estar mental, dicas para o equilíbrio entre o tempo online e offline, e informações sobre como buscar ajuda quando necessário.",
    data: "10/08/2023",
    categoria: "Saúde",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/holograma-3d-de-um-cerebro-ai_53876-15015.jpg",
    titulo: "Inteligência Artificial no Setor de Saúde",
    subtitulo: "Avanços que estão transformando a medicina",
    descricao:
      "Explore como a IA está revolucionando o diagnóstico e tratamento médico.",
    texto:
      "A inteligência artificial (IA) está desempenhando um papel vital na transformação do setor de saúde. Neste artigo, examinamos os avanços mais recentes em IA aplicada à medicina, incluindo diagnóstico médico, pesquisa de medicamentos e assistência ao paciente. Saiba como a IA está melhorando a precisão do diagnóstico e permitindo tratamentos mais eficazes.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará estudos de casos de sucesso da IA na medicina, informações sobre ética em IA médica e previsões para o futuro da saúde baseada em IA.",
    data: "11/12/2023",
    categoria: "Saúde",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/medico-com-tablet-e-holograma-coracao_53876-14618.jpg",
    titulo: "Telemedicina e Conectividade",
    subtitulo: "A revolução na prestação de cuidados de saúde",
    descricao:
      "Explore como a telemedicina e a conectividade estão transformando a forma como acessamos assistência médica.",
    texto:
      "A telemedicina e a conectividade estão se tornando cada vez mais essenciais no campo da saúde. Neste artigo, examinamos como a tecnologia está permitindo consultas médicas remotas, monitoramento de pacientes em tempo real e a troca segura de informações médicas. Descubra como a telemedicina está revolucionando a prestação de cuidados de saúde, proporcionando conveniência e acesso a serviços médicos de qualidade.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de plataformas de telemedicina líderes, dicas para pacientes e médicos e discussões sobre regulamentações e desafios da telemedicina.",
    data: "05/02/2023",
    categoria: "Saúde",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/dispositivo-portatil-de-monitoramento-de-saude_53876-15536.jpg",
    titulo: "Wearables para Saúde",
    subtitulo: "Tecnologia vestível que salva vidas",
    descricao:
      "Descubra como os dispositivos vestíveis estão promovendo a saúde e o bem-estar.",
    texto:
      "Os dispositivos vestíveis, como smartwatches e pulseiras fitness, estão se tornando populares entre os entusiastas da saúde. Neste artigo, exploramos como esses wearables monitoram atividades físicas, medem sinais vitais e ajudam na prevenção de doenças. Saiba como a tecnologia vestível está capacitando as pessoas a tomarem decisões mais informadas sobre sua saúde e estilo de vida.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará análises de diferentes tipos de wearables, dicas para maximizar o uso desses dispositivos e exemplos de histórias de sucesso de indivíduos que transformaram suas vidas com a ajuda de wearables.",
    data: "19/08/2023",
    categoria: "Saúde",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/conceito-de-doutor-inteligente-ia_53876-14447.jpg",
    titulo: "Inteligência Artificial no Diagnóstico Médico",
    subtitulo: "Precisão e eficiência na medicina",
    descricao: "Explore como a IA está revolucionando o diagnóstico médico.",
    texto:
      "A inteligência artificial está desempenhando um papel fundamental na melhoria da precisão do diagnóstico médico. Neste artigo, analisamos como algoritmos de IA são treinados para identificar doenças com rapidez e eficiência, auxiliando médicos em suas decisões clínicas. Saiba como a IA está transformando a medicina ao tornar o diagnóstico mais preciso e permitir tratamentos mais personalizados.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de sistemas de IA em diagnóstico médico, discussões sobre a ética da IA na medicina e previsões para o futuro da assistência médica com IA.",
    data: "02/11/2023",
    categoria: "Saúde",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/pesquisadores-de-nanotecnologia-trabalhando-em-laboratorio_53876-14279.jpg",
    titulo: "Nanotecnologia na Medicina",
    subtitulo: "Avanços que estão transformando a cura",
    descricao:
      "Explore como a nanotecnologia está revolucionando a pesquisa e tratamento médico.",
    texto:
      "A nanotecnologia está abrindo novas possibilidades na medicina. Neste artigo, examinamos como a manipulação de materiais em escala nanométrica está sendo usada para revolucionar a pesquisa e o tratamento médico. Descubra como os nanomateriais estão sendo projetados para direcionar doenças específicas no corpo, permitindo tratamentos mais eficazes e menos invasivos.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de aplicações práticas de nanotecnologia na medicina, como sistemas de liberação controlada de medicamentos, diagnósticos avançados e nanorrobôs para intervenções médicas. Além disso, discutimos os desafios éticos e regulatórios associados à nanotecnologia médica.",
    data: "18/01/2023",
    categoria: "Saúde",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/startup-business-people-group-reuniao-na-sala-de-reunioes-jovem-empresario-start-up-team-treinamento-corporativo-10483-85.jpg",
    titulo: "Startups de Tecnologia",
    subtitulo: "O mundo das oportunidades empreendedoras",
    descricao:
      "Explore como as startups de tecnologia estão moldando o cenário empresarial atual.",
    texto:
      "As startups de tecnologia têm desempenhado um papel fundamental na transformação do cenário empresarial. Neste artigo, analisamos como essas empresas inovadoras estão revolucionando indústrias tradicionais, criando soluções disruptivas e atraindo investidores. Descubra as melhores práticas para iniciar e expandir uma startup de tecnologia e como se destacar em um mercado altamente competitivo.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de startups de sucesso, insights de empreendedores de destaque e dicas para garantir o sucesso de sua própria startup de tecnologia.",
    data: "10/04/2023",
    categoria: "Empreendedorismo",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/criptomoeda-digital-com-cadeado-na-tela-do-computador_53876-25484.jpg",
    titulo: "Blockchain e Empreendedorismo",
    subtitulo: "Explorando as oportunidades da tecnologia blockchain",
    descricao:
      "Descubra como a tecnologia blockchain está impulsionando o empreendedorismo inovador.",
    texto:
      "O blockchain não é apenas a base das criptomoedas, mas também uma tecnologia revolucionária que está transformando o empreendedorismo. Neste artigo, examinamos como o blockchain está sendo aplicado em diversos setores, desde finanças até logística. Saiba como empreendedores estão explorando oportunidades na criação de aplicativos descentralizados, contratos inteligentes e muito mais.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de startups que utilizam blockchain, informações sobre as implicações legais e de segurança do blockchain e como se preparar para uma carreira empreendedora baseada em blockchain.",
    data: "28/06/2023",
    categoria: "Empreendedorismo",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/robo-de-inteligencia-artificial-e-o-mundo-digital_53876-24477.jpg",
    titulo: "Inteligência Artificial para Empreendedores",
    subtitulo: "Aproveitando o poder da IA nos negócios",
    descricao:
      "Saiba como a inteligência artificial está impulsionando empreendimentos inovadores.",
    texto:
      "A inteligência artificial (IA) não é mais exclusividade das grandes corporações. Neste artigo, exploramos como os empreendedores podem aproveitar o poder da IA para melhorar produtos, serviços e processos de negócios. Descubra como a IA pode automatizar tarefas, personalizar experiências do cliente e impulsionar a eficiência operacional, tudo enquanto impulsiona o crescimento dos negócios.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de startups que incorporam IA em seus modelos de negócios, recursos para aprender mais sobre IA e dicas para implementar a IA em sua empresa.",
    data: "15/09/2023",
    categoria: "Empreendedorismo",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/homem-negocios-dirigindo-carro-corrida_53876-109482.jpg",
    titulo: "Economia Gig e Empreendedorismo",
    subtitulo: "Como se tornar um empreendedor na economia gig",
    descricao: "Explore as oportunidades de empreendedorismo na economia gig.",
    texto:
      "A economia gig está criando oportunidades sem precedentes para empreendedores independentes. Neste artigo, analisamos como indivíduos podem entrar na economia gig e aproveitar seus talentos e habilidades para criar seus próprios negócios. Descubra como construir uma carreira empreendedora na economia gig e como navegar pelos desafios e oportunidades exclusivos desse cenário.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará dicas para identificar oportunidades na economia gig, ferramentas úteis para empreendedores independentes e histórias inspiradoras de empreendedores de sucesso na economia gig.",
    data: "03/12/2023",
    categoria: "Empreendedorismo",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/mulher-tocando-paineis-solares_53876-126224.jpg",
    titulo: "Empreendedorismo Ecológico e Tecnologia",
    subtitulo: "Soluções verdes para empreendedores",
    descricao:
      "Descubra como a tecnologia está impulsionando o empreendedorismo sustentável.",
    texto:
      "O empreendedorismo ecológico está ganhando destaque à medida que os empreendedores buscam soluções verdes para os desafios do mundo. Neste artigo, exploramos como a tecnologia está desempenhando um papel fundamental na criação de negócios sustentáveis. Saiba como as startups estão utilizando energia renovável, reciclagem e outras inovações tecnológicas para impulsionar o empreendedorismo ecológico.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de startups ecológicas de sucesso, recursos para empreendedorismo sustentável e informações sobre como medir o impacto ambiental de seu negócio.",
    data: "22/05/2023",
    categoria: "Empreendedorismo",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/pessoa-de-negocios-com-uma-luz-de-ideia-luz-de-bulbo-conceito-de-criatividade-e-inovacao_31694-636.jpg",
    titulo: "Empreendedorismo e Inovação Tecnológica",
    subtitulo: "Construindo negócios para o futuro",
    descricao:
      "Explore como empreendedores estão moldando o cenário empresarial com inovações tecnológicas.",
    texto:
      "O empreendedorismo está intrinsecamente ligado à inovação, e a tecnologia desempenha um papel vital nesse processo. Neste artigo, analisamos como empreendedores estão aproveitando as últimas tendências tecnológicas para criar startups de sucesso e revolucionar indústrias tradicionais. Descubra histórias inspiradoras de empreendedores visionários e aprenda como a inovação tecnológica está moldando o futuro dos negócios.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de startups inovadoras, recursos para empreendedores que desejam abraçar a tecnologia e dicas para identificar oportunidades de negócios no mundo digital.",
    data: "04/12/2023",
    categoria: "Empreendedorismo",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/parque-de-energia-solar-com-turbinas-eolicas_53876-93546.jpg",
    titulo: "Energias Renováveis e Sustentabilidade",
    subtitulo: "O caminho para um futuro mais verde",
    descricao:
      "Explore como as energias renováveis estão impulsionando a sustentabilidade global.",
    texto:
      "As energias renováveis desempenham um papel fundamental na luta contra as mudanças climáticas. Neste artigo, analisamos como a energia solar, eólica, hidrelétrica e outras fontes renováveis estão sendo adotadas em todo o mundo para reduzir a pegada de carbono e promover a sustentabilidade. Descubra como as empresas e governos estão investindo em energias limpas e como você pode fazer a diferença em sua comunidade.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de projetos de energia renovável, recursos para reduzir seu consumo de energia e informações sobre como apoiar a transição para uma matriz energética mais sustentável.",
    data: "09/02/2023",
    categoria: "Sustentabilidade",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/agricultor-usando-tecnologia-tablet-com-mulher-trabalhando-na-lavoura_53876-139419.jpg",
    titulo: "Agricultura Sustentável e Tecnologia",
    subtitulo: "Inovações que alimentam o mundo de forma responsável",
    descricao:
      "Descubra como a tecnologia está transformando a agricultura sustentável.",
    texto:
      "A agricultura sustentável desempenha um papel crucial na garantia de alimentos para o futuro, ao mesmo tempo em que protege o meio ambiente. Neste artigo, exploramos como a tecnologia está sendo aplicada na agricultura para aumentar a eficiência, reduzir o desperdício e promover práticas agrícolas sustentáveis. Saiba como a agricultura de precisão, a monitorização ambiental e outras inovações estão moldando o futuro da produção de alimentos.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de fazendas sustentáveis, ferramentas para agricultores, e dicas sobre como apoiar a agricultura local e sustentável.",
    data: "17/07/2023",
    categoria: "Sustentabilidade",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/homem-trabalhando-no-canteiro-de-obras_53876-25587.jpg",
    titulo: "Construção Sustentável e Tecnologia",
    subtitulo: "Edifícios ecológicos para um mundo mais verde",
    descricao: "Explore as inovações na construção sustentável.",
    texto:
      "A construção sustentável está se tornando uma prioridade global à medida que enfrentamos desafios ambientais. Neste artigo, analisamos como a tecnologia está sendo utilizada na construção de edifícios ecológicos, desde materiais sustentáveis até sistemas de energia eficiente. Descubra como os empreendedores e profissionais da construção estão moldando o setor para um futuro mais verde.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de edifícios sustentáveis icônicos, recursos para projetos de construção e informações sobre certificações ambientais.",
    data: "05/11/2023",
    categoria: "Sustentabilidade",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/mulher-separando-o-lixo-para-reciclagem_53876-128464.jpg",
    titulo: "Redução de Resíduos e Tecnologia",
    subtitulo: "Inovações para um planeta com menos lixo",
    descricao:
      "Descubra como a tecnologia está ajudando a combater o desperdício.",
    texto:
      "A redução de resíduos é fundamental para preservar o meio ambiente. Neste artigo, exploramos como a tecnologia está desempenhando um papel crucial na redução do desperdício, desde a reciclagem avançada até o design sustentável de produtos. Saiba como empreendedores e empresas estão adotando práticas de negócios responsáveis e como você pode contribuir para um mundo com menos lixo.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de inovações de redução de resíduos, dicas para adotar um estilo de vida sustentável e informações sobre como apoiar a reciclagem local.",
    data: "12/04/2023",
    categoria: "Sustentabilidade",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/homem-carregando-bicicleta-eletrica-moderna_53876-148309.jpg",
    titulo: "Mobilidade Sustentável e Tecnologia",
    subtitulo: "Transformando o transporte urbano",
    descricao: "Explore as inovações na mobilidade urbana sustentável.",
    texto:
      "A mobilidade sustentável é fundamental para reduzir a poluição e melhorar a qualidade de vida nas cidades. Neste artigo, analisamos como a tecnologia está impulsionando soluções de transporte limpo, desde veículos elétricos até sistemas de compartilhamento de bicicletas e scooters. Descubra como as cidades estão se adaptando e como você pode fazer escolhas mais sustentáveis em sua própria jornada.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de cidades com sistemas de transporte sustentável eficazes, recursos para adotar alternativas de mobilidade verde e informações sobre políticas de transporte sustentável.",
    data: "30/09/2023",
    categoria: "Sustentabilidade",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/jovem-feliz-posando-em-roupas-sustentaveis_53876-41419.jpg",
    titulo: "Moda Sustentável e Tecnologia",
    subtitulo: "Estilo consciente para um futuro melhor",
    descricao:
      "Descubra como a tecnologia está transformando a moda sustentável.",
    texto:
      "A moda sustentável é uma tendência crescente na indústria da moda. Neste artigo, exploramos como a tecnologia está sendo utilizada para criar roupas e acessórios sustentáveis, desde materiais reciclados até o rastreamento de produtos transparentes. Saiba como os empreendedores estão liderando o caminho para uma moda mais ética e como você pode fazer escolhas conscientes ao comprar.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de marcas de moda sustentável, dicas para construir um guarda-roupa consciente e informações sobre o impacto ambiental da indústria da moda.",
    data: "18/01/2023",
    categoria: "Sustentabilidade",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/instalacao-de-paineis-solares-em-um-telhado_53876-18517.jpg",
    titulo: "Energia Solar e Sustentabilidade",
    subtitulo: "A revolução energética verde",
    descricao:
      "Descubra como a energia solar está impulsionando a sustentabilidade.",
    texto:
      "A energia solar está desempenhando um papel crucial na transição para fontes de energia mais sustentáveis. Neste artigo, exploramos como a tecnologia de painéis solares está sendo adotada em residências e empresas para reduzir a pegada de carbono e economizar dinheiro. Saiba como a energia solar está transformando o setor energético e contribuindo para um futuro mais limpo.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará informações sobre incentivos governamentais para energia solar, dicas para instalação de painéis solares e histórias de sucesso de empresas que adotaram a energia solar.",
    data: "14/11/2023",
    categoria: "-Sustentabilidade",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/robos-humanoides-computador-futurista-inteligencia-artificial-ou-robo-assistente-realista_39422-1193.jpg",
    titulo: "A Revolução da Inteligência Artificial (IA)",
    subtitulo: "Mudando o mundo, um algoritmo de cada vez",
    descricao: "Explore o impacto da IA na tecnologia e na sociedade.",
    texto:
      "A Inteligência Artificial (IA) está transformando a maneira como vivemos e trabalhamos. Neste artigo, mergulhamos na revolução da IA, desde assistentes virtuais até carros autônomos. Descubra como a IA está sendo aplicada em setores como saúde, finanças e transporte, e como essa tecnologia está moldando nosso futuro digital.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de aplicativos da IA, considerações éticas relacionadas à IA e insights sobre o futuro da inteligência artificial.",
    data: "08/07/2023",
    categoria: "-Tecnologia",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/mulher-com-olhos-fechados-tirando-um-tempo-para-relaxar_1150-41429.jpg",
    titulo: "Bem-Estar Mental e Tecnologia",
    subtitulo: "Equilibrando sua saúde mental em um mundo conectado",
    descricao:
      "Explore como a tecnologia pode ser usada para melhorar o bem-estar mental.",
    texto:
      "No mundo digital de hoje, a saúde mental é uma preocupação crescente. Neste artigo, discutimos como a tecnologia está sendo aplicada para apoiar o bem-estar mental, desde aplicativos de meditação até plataformas de terapia online. Descubra como você pode usar a tecnologia de forma saudável para cuidar de sua mente e como a inovação está transformando o campo da saúde mental.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de aplicativos e recursos relacionados ao bem-estar mental, dicas para o equilíbrio entre o tempo online e offline, e informações sobre como buscar ajuda quando necessário.",
    data: "10/08/2023",
    categoria: "-Saúde",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/pessoas-jovens-trabalhando-em-um-escritorio-de-coworking_53876-44774.jpg",
    titulo: "Inovação Tecnológica e Startups",
    subtitulo: "O papel das startups na mudança do cenário empresarial",
    descricao:
      "Explore como as startups estão liderando a inovação tecnológica.",
    texto:
      "As startups desempenham um papel vital na introdução de inovações tecnológicas no mercado. Neste artigo, examinamos como essas empresas emergentes estão moldando o cenário empresarial, desde soluções de software até hardware revolucionário. Descubra como os empreendedores estão transformando ideias em negócios de sucesso e impulsionando a inovação tecnológica.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará dicas para empreendedores que desejam criar uma startup de tecnologia, histórias inspiradoras de startups de sucesso e insights sobre o ecossistema de inovação.",
    data: "22/02/2023",
    categoria: "-Empreendedorismo",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/mao-feminina-levando-um-pequeno-broto_1150-34095.jpg",
    titulo: "Agricultura Sustentável e Tecnologia",
    subtitulo: "Cultivando um futuro mais verde",
    descricao:
      "Explore como a tecnologia está impulsionando a agricultura sustentável.",
    texto:
      "A agricultura sustentável é fundamental para a segurança alimentar global. Neste artigo, investigamos como a tecnologia está sendo aplicada na agricultura, desde drones para monitoramento de safras até sistemas de irrigação inteligentes. Descubra como os agricultores estão adotando práticas sustentáveis e como a tecnologia está desempenhando um papel crucial na produção de alimentos de maneira mais eficiente e ecológica.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de inovações agrícolas, recursos para agricultores interessados em tecnologia e informações sobre como a agricultura sustentável pode ajudar a combater a mudança climática.",
    data: "05/04/2023",
    categoria: "-Sustentabilidade",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/medico-masculino-saudavel-usando-um-tablet-pc_53876-16160.jpg",
    titulo: "Telemedicina e o Futuro da Saúde",
    subtitulo: "Cuidados médicos à distância",
    descricao:
      "Explore como a telemedicina está revolucionando o setor de saúde.",
    texto:
      "A telemedicina está se tornando uma parte integral dos cuidados de saúde modernos. Neste artigo, examinamos como a tecnologia está permitindo consultas médicas remotas, diagnósticos à distância e monitoramento de pacientes. Descubra como a telemedicina está melhorando o acesso à assistência médica e transformando a maneira como os profissionais de saúde prestam cuidados.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de plataformas de telemedicina, dicas para pacientes que utilizam esse serviço e insights sobre como a telemedicina está moldando o futuro dos cuidados de saúde.",
    data: "30/09/2023",
    categoria: "-Saúde",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/desenvolvedor-web-trabalhando-em-computador-portatil-no-escritorio_53876-65461.jpg",
    titulo: "Empreendedorismo no E-commerce",
    subtitulo: "Criando negócios online de sucesso",
    descricao:
      "Descubra como empreendedores estão prosperando no comércio eletrônico.",
    texto:
      "O comércio eletrônico oferece oportunidades únicas para empreendedores. Neste artigo, exploramos como empresários estão construindo negócios online de sucesso, desde lojas de nicho até gigantes do e-commerce. Saiba como aproveitar a tecnologia para criar uma presença digital sólida e alcançar o sucesso no mundo do empreendedorismo online.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará dicas para iniciar um negócio de comércio eletrônico, estratégias de marketing digital eficazes e histórias inspiradoras de empreendedores do e-commerce.",
    data: "18/12/2023",
    categoria: "-Empreendedorismo",
  },
];

const inputPesquisa = document.getElementById("pesquisa");
const resultadosDiv = document.getElementById("resultados");

inputPesquisa.addEventListener("input", function () {
  const termoPesquisa = inputPesquisa.value.toLowerCase();

  if (termoPesquisa === "") {
    resultadosDiv.innerHTML = "";
  } else {
    const resultadosFiltrados = artigos.filter((artigo) =>
      artigo.titulo.toLowerCase().includes(termoPesquisa)
    );
    mostrarResultados(resultadosFiltrados);
  }
});

function mostrarResultados(resultados) {
  resultadosDiv.innerHTML = "";

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = "Nenhum artigo encontrado.";
  } else {
    const resultadosExibidos = resultados.slice(0, 3);

    resultadosExibidos.forEach((artigo) => {
      const link = document.createElement("a");
      link.href = "artigo.html?titulo=" + encodeURIComponent(artigo.titulo);
      link.textContent = artigo.titulo;
      link.style.display = "block";
      link.style.textDecoration = "none";
      link.style.color = "#a1a1a1";

      link.addEventListener("click", function () {
        localStorage.setItem("artigoSelecionado", JSON.stringify(artigo));
      });

      resultadosDiv.appendChild(link);
    });
  }
}
