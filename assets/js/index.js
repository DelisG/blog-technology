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
                                href="/artigo.html?titulo=Energia%20Solar%20e%20Sustentabilidade"
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
                                href="/artigo.html?titulo=A%20Revolução%20da%20Inteligência%20Artificial%20(IA)"
                                class="text-decoration-none">Ver mais</a>
                        </div>
                    </div>
                    <div
                        class=" col-lg-4 card rounded-3 elevacao div-artigo">
                        <div class="card-body card-artigo">
                            <img
                                src="https://www.imexmedicalgroup.com.br/wp-content/uploads/2021/08/BLOG-imex-futuro-medicina-1024x555.jpg">
                            <p class="category">Saúde</p>

                        </div>

                        <div class="p-4">
                            <h4>Telemedicina e o Futuro da Saúde</h4>
                            <p class="py-2">Explore como a telemedicina está revolucionando o setor de saúde.</p>
                            <a
                                href="/artigo.html?titulo=Telemedicina%20e%20o%20Futuro%20da%20Saúde"
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
  adicionarCards();
  verMaisBtn.style.display = "none";
});

const artigos = [
  {
    imagem:
      "https://img.olhardigital.com.br/wp-content/uploads/2022/05/Realidade-Aumentada.jpg",
    titulo: "Futuro da Realidade Virtual",
    subtitulo: "Explorando novas dimensões digitais",
    descricao:
      "Descubra as últimas inovações em realidade virtual e como ela está transformando a forma como interagimos com o mundo digital.",
    texto:
      "À medida que avançamos para um cenário cada vez mais tecnológico, a Realidade Virtual está moldando não apenas o entretenimento, mas também a educação, o treinamento profissional e até mesmo a assistência médica. Imagine aprender sobre civilizações antigas explorando virtualmente sítios arqueológicos, ou realizar simulações médicas complexas sem riscos para pacientes - a RV abre portas para possibilidades antes inimagináveis.",
    textocomplementar:
      "O Futuro da Automação e Inteligência Artificial, ressalta a proeminência dessas tecnologias emergentes. À medida que nos aprofundamos nesse futuro entrelaçado, vislumbramos não apenas a eficiência operacional aprimorada, mas também desafios éticos e sociais. A busca por um equilíbrio entre o avanço tecnológico e as considerações humanitárias torna-se crucial, lançando luz sobre as decisões éticas que orientarão o desenvolvimento contínuo da Robótica Avançada. Em resumo, a Robótica Avançada não é meramente uma expressão de automação; é um convite para explorar os limites do conhecimento humano e da engenhosidade tecnológica, definindo uma narrativa que transformará a maneira como vivemos, trabalhamos e interagimos com o mundo ao nosso redor.",
    data: "20/04/2023",
    categoria: "Tecnologia",
    id: "1",
  },
  {
    imagem:
      "https://resources.news.e.abb.com/images/2021/2/19/0/16286-052_small.jpg",
    titulo: "Robótica Avançada",
    subtitulo: "O futuro da automação e inteligência artificial",
    descricao:
      "Explore o mundo da robótica avançada e descubra como a IA está moldando o futuro da automação.",
    texto:
      "No cenário dinâmico e em constante evolução da tecnologia, a Robótica Avançada emerge como uma promissora fronteira, delineando o curso do futuro na automação e inteligência artificial. Este domínio tecnológico transcende as barreiras convencionais, explorando a interseção intrincada entre máquinas e inteligência, promovendo avanços revolucionários que moldarão as bases da sociedade moderna.",
    textocomplementar:
      "À medida que nos aventuramos nesse reino de inovação, testemunhamos a ascensão de máquinas dotadas de capacidades cognitivas avançadas, capazes de processar informações de maneira similar ou até superior à mente humana. A Robótica Avançada não apenas automatiza tarefas rotineiras, mas também desencadeia uma revolução na tomada de decisões complexas, transformando setores inteiros, desde a manufatura até a medicina e a exploração espacial.",
    data: "12/11/2023",
    categoria: "Tecnologia",
    id: "2",
  },
  {
    imagem:
      "https://www.terraempresas.com.br/blog/wp-content/uploads/2022/07/terra-empresas-seguranca-digital-capa.jpg",
    titulo: "Cibersegurança em Ascensão",
    subtitulo: "Protegendo dados e sistemas em um mundo digital",
    descricao:
      "Explore as últimas tendências em cibersegurança e saiba como proteger seus dados.",
    texto:
      "A Robótica Avançada representa a vanguarda da revolução tecnológica, mergulhando-nos em um mundo onde a automação e a inteligência artificial convergem para redefinir a maneira como interagimos com a tecnologia. Nesse cenário, robôs não são apenas máquinas programadas, mas agentes autônomos capazes de aprender e se adaptar, transformando setores industriais e proporcionando avanços notáveis em diversas áreas.",
    textocomplementar:
      "O futuro da automação e inteligência artificial se desenha como uma sinfonia perfeita entre inovação e eficiência. Essa evolução da Robótica Avançada promete não apenas otimizar tarefas rotineiras, mas também impulsionar descobertas científicas, aprimorar a medicina e, acima de tudo, moldar uma sociedade onde a interação entre humanos e máquinas é sinônimo de progresso e possibilidades infinitas.",
    data: "08/09/2023",
    categoria: "Tecnologia",
    id: "3",
  },
  {
    imagem:
      "https://master.clear.com.br/wp-content/uploads/sites/2/2022/09/criptomoedas-capa.jpeg",
    titulo: "Criptomoedas em Destaque",
    subtitulo: "O mundo das moedas digitais",
    descricao:
      "Explore o universo das criptomoedas, incluindo Bitcoin, Ethereum e muito mais.",
    texto:
      "No cenário financeiro atual, as criptomoedas têm se destacado como protagonistas, redefineindo a forma como entendemos e lidamos com o dinheiro. Sob o subtitulo O mundo das moedas digitais, adentramos em um universo onde transações ocorrem instantaneamente, sem a necessidade de intermediários tradicionais. Essas moedas virtuais, baseadas em tecnologia de blockchain, oferecem não apenas eficiência, mas também uma visão futurista do sistema econômico global",
    textocomplementar:
      "Em um ecossistema descentralizado, as criptomoedas não estão vinculadas a nenhum governo ou instituição central, conferindo aos usuários uma liberdade financeira inédita. No entanto, essa revolução monetária não se limita apenas à questão da autonomia; ela propõe uma redefinição completa de como concebemos e conduzimos transações financeiras. Ao explorar Criptomoedas em Destaque, mergulhamos em um universo onde a confiança é estabelecida pela criptografia e a inovação não conhece limites. O futuro das finanças parece agora mais vibrante do que nunca.",
    data: "03/07/2023",
    categoria: "Tecnologia",
    id: "4",
  },
  {
    imagem:
      "https://endeavor.org.br/wp-content/uploads/2015/07/internet-das-coisas.jpg",

    titulo: "Internet das Coisas (IoT) e Seu Impacto na Tecnologia",
    subtitulo: "A revolução conectada",
    descricao:
      "Explore como a Internet das Coisas está transformando nosso mundo tecnológico.",
    texto:
      "A emergência da Internet das Coisas (IoT) marca uma revolução notável no cenário tecnológico global. Este paradigma inovador transcende as fronteiras convencionais da conectividade, desdobrando-se como uma teia inteligente que interliga dispositivos e sistemas. A IoT, com sua capacidade de coletar, analisar e transmitir dados em tempo real, está transformando não apenas a forma como interagimos com a tecnologia, mas também a maneira como o mundo ao nosso redor opera.",
    textocomplementar:
      "No epicentro dessa revolução conectada, o subtítulo A revolução conectada ressoa com a essência transformadora da IoT. Esta revolução não se trata apenas de dispositivos interligados, mas sim de uma nova era em que a tecnologia se torna uma extensão intrínseca de nossas vidas. À medida que a conectividade se infiltra em setores que antes eram independentes, testemunhamos uma metamorfose digital que transcende as barreiras tradicionais. A revolução conectada é mais do que uma simples evolução tecnológica; é um fenômeno que redefine a maneira como vivemos, trabalhamos e nos relacionamos com o mundo ao nosso redor. Nesse novo paradigma, a interconexão não é apenas uma comodidade, mas sim um catalisador que impulsiona a inovação, abre portas para novas possibilidades e nos orienta rumo a um futuro onde a tecnologia não é apenas uma ferramenta, mas sim uma experiência integrada e significativa",
    data: "20/03/2023",
    categoria: "Tecnologia",
    id: "#",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/medico-com-tablet-e-holograma-coracao_53876-14618.jpg",

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
    id: "#",
  },
  {
    imagem:
      "https://www.conexasaude.com.br/blog/wp-content/uploads/2020/05/original-2755be47cffd46366e5a9ca654c3beb8-768x436.jpg",
    titulo: "Inteligência Artificial no Diagnóstico Médico",
    subtitulo: "Precisão e eficiência na medicina",
    descricao: "Explore como a IA está revolucionando o diagnóstico médico.",
    texto:
      "A inteligência artificial está desempenhando um papel fundamental na melhoria da precisão do diagnóstico médico. Neste artigo, analisamos como algoritmos de IA são treinados para identificar doenças com rapidez e eficiência, auxiliando médicos em suas decisões clínicas. Saiba como a IA está transformando a medicina ao tornar o diagnóstico mais preciso e permitir tratamentos mais personalizados.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de sistemas de IA em diagnóstico médico, discussões sobre a ética da IA na medicina e previsões para o futuro da assistência médica com IA.",
    data: "02/11/2023",
    categoria: "Saúde",
    id: "#",
  },
  {
    imagem:
      "https://www.drgbrasil.com.br/wp-content/uploads/2021/04/inteligencia-artificial-na-saude-capa.jpg",
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
    id: "#",
  },
  {
    imagem:
      "https://img.europapress.es/fotoweb/fotonoticia_20211217123022_420.jpg",
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
    id: "#",
  },
  {
    imagem:
      "https://www.oficinadanet.com.br/imagens/post/26887/o_que_esta_reservado_para_o_futuro_dos_wearables_1400x875_5d40da1a0da06.jpg",
    titulo: "Wearables: auxiliando no diagnostico prévio",
    subtitulo: "Tecnologia vestível que salva vidas",
    descricao:
      "Descubra como os dispositivos vestíveis estão promovendo a saúde e o bem-estar.",
    texto:
      "Os dispositivos vestíveis, como smartwatches e pulseiras fitness, estão se tornando populares entre os entusiastas da saúde. Neste artigo, exploramos como esses wearables monitoram atividades físicas, medem sinais vitais e ajudam na prevenção de doenças. Saiba como a tecnologia vestível está capacitando as pessoas a tomarem decisões mais informadas sobre sua saúde e estilo de vida.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará análises de diferentes tipos de wearables, dicas para maximizar o uso desses dispositivos e exemplos de histórias de sucesso de indivíduos que transformaram suas vidas com a ajuda de wearables.",
    data: "19/08/2023",
    categoria: "Saúde",
    id: "#",
  },

  {
    imagem:
      "https://angiomedi.com.br/home/wp-content/uploads/2018/11/Screenshot_1-1024x569.jpg",
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
    id: "#",
  },
  {
    imagem: "https://abstartups.com.br/wp-content/uploads/2018/02/ink-1.png",
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
    id: "#",
  },
  {
    imagem:
      "https://startse-uploader.s3.us-east-2.amazonaws.com/bitcoin_blockchain_c7f93b989a.jpg",
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
    id: "#",
  },
  {
    imagem:
      "https://classic.exame.com/wp-content/uploads/2018/10/robc3b4.jpg?quality=70&strip=info&w=1024",
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
    id: "#",
  },
  {
    imagem:
      "https://financeone.com.br/wp-content/uploads/2017/12/eventos-empreendedorismo-imagem-pixabay.jpg",
    titulo: "Economia Gig e Empreendedorismo",
    subtitulo: "Como se tornar um empreendedor na economia gig",
    descricao: "Explore as oportunidades de empreendedorismo na economia gig.",
    texto:
      "A economia gig está criando oportunidades sem precedentes para empreendedores independentes. Neste artigo, analisamos como indivíduos podem entrar na economia gig e aproveitar seus talentos e habilidades para criar seus próprios negócios. Descubra como construir uma carreira empreendedora na economia gig e como navegar pelos desafios e oportunidades exclusivos desse cenário.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará dicas para identificar oportunidades na economia gig, ferramentas úteis para empreendedores independentes e histórias inspiradoras de empreendedores de sucesso na economia gig.",
    data: "03/12/2023",
    categoria: "Empreendedorismo",
    id: "#",
  },
  {
    imagem:
      "https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2019/10/shutterstock_1110036392.png",
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
    id: "#",
  },
  {
    imagem:
      "https://blog.fortestecnologia.com.br/wp-content/uploads/2017/11/fortes-tecnologia-inovacao-na-contabilidade-2.jpg",
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
    id: "#",
  },
  {
    imagem:
      "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2021/12/fontes-de-energias-renovaveis-topo.jpg",
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
    id: "#",
  },
  {
    imagem:
      "https://mappa.ag/wp-content/uploads/2023/02/Agricultura-4.0-na-pra%CC%81tica-X-tecnologias-para-acelerar-resultados-1-scaled.jpg",
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
    id: "#",
  },
  {
    imagem:
      "https://gestao-obra.engwhere.com.br/wp-content/uploads/sites/3/2018/10/meio-ambiente-edificios-verdes.png",
    titulo: "Construção Sustentável e Tecnologia",
    subtitulo: "Edifícios ecológicos para um mundo mais verde",
    descricao: "Explore as inovações na construção sustentável.",
    texto:
      "A construção sustentável está se tornando uma prioridade global à medida que enfrentamos desafios ambientais. Neste artigo, analisamos como a tecnologia está sendo utilizada na construção de edifícios ecológicos, desde materiais sustentáveis até sistemas de energia eficiente. Descubra como os empreendedores e profissionais da construção estão moldando o setor para um futuro mais verde.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de edifícios sustentáveis icônicos, recursos para projetos de construção e informações sobre certificações ambientais.",
    data: "05/11/2023",
    categoria: "Sustentabilidade",
    id: "#",
  },
  {
    imagem:
      "https://beegreen.eco.br/wp-content/uploads/2019/05/chega-de-lixo-promova-a-sustentabilidade-tenha-uma-vida-sustentavel-e-diminua-o-impacto-ambiental-com-metodos-ecologicos-1.jpg",
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
    id: "#",
  },
  {
    imagem:
      "https://www.zuldigital.com.br/blog/wp-content/uploads/2022/04/shutterstock_1971287231_Easy-Resize.com_.jpg",
    titulo: "Mobilidade Sustentável e Tecnologia",
    subtitulo: "Transformando o transporte urbano",
    descricao: "Explore as inovações na mobilidade urbana sustentável.",
    texto:
      "A mobilidade sustentável é fundamental para reduzir a poluição e melhorar a qualidade de vida nas cidades. Neste artigo, analisamos como a tecnologia está impulsionando soluções de transporte limpo, desde veículos elétricos até sistemas de compartilhamento de bicicletas e scooters. Descubra como as cidades estão se adaptando e como você pode fazer escolhas mais sustentáveis em sua própria jornada.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de cidades com sistemas de transporte sustentável eficazes, recursos para adotar alternativas de mobilidade verde e informações sobre políticas de transporte sustentável.",
    data: "30/09/2023",
    categoria: "Sustentabilidade",
    id: "#",
  },
  {
    imagem:
      "https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/coleoquereaproveitaretalhosdejeansfoiexpostaduranteapalestra.jpg",
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
    id: "#",
  },
  {
    imagem:
      "https://blog.bluesol.com.br/wp-content/uploads/2017/08/5-Raz%C3%B5es-Porque-a-Energia-Solar-%C3%89-De-Fato-Sustent%C3%A1vel.jpg",
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
    id: "#",
  },
  {
    imagem:
      "https://www.naoviu.com.br/wp-content/uploads/2023/07/Design-sem-nome-39-1080x815.png",
    titulo: "A Revolução da Inteligência Artificial (IA)",
    subtitulo: "Mudando o mundo, um algoritmo de cada vez",
    descricao: "Explore o impacto da IA na tecnologia e na sociedade.",
    texto:
      "A Inteligência Artificial (IA) está transformando a maneira como vivemos e trabalhamos. Neste artigo, mergulhamos na revolução da IA, desde assistentes virtuais até carros autônomos. Descubra como a IA está sendo aplicada em setores como saúde, finanças e transporte, e como essa tecnologia está moldando nosso futuro digital.",
    textocomplementar:
      "No campo 'texto-complementar', você encontrará exemplos de aplicativos da IA, considerações éticas relacionadas à IA e insights sobre o futuro da inteligência artificial.",
    data: "08/07/2023",
    categoria: "Tecnologia",
    id: "#",
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
    id: "#",
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
    id: "#",
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
    id: "#",
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
    id: "#",
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
    id: "#",
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
