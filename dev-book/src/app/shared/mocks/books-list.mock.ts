import { Category } from "../enums/category";
import { IBook } from "../models/book.model";

export const bookListMock: IBook[] = [
    {
        id: 1,
        name: 'Agile: Desenvolvimento de software com entregas frequentes e foco no valor de negócio',
        price: 49.90,
        category: Category.methodology,
        imageUrl: '/assets/images/agile.jpg',
        author: 'André Faria Gomes',
        publisher: 'Casa do Código (16 abril 2014)',
        numberOfPages: 214,
        description: 'As diversas metodologias ágeis que formam o tão falado "Agile" são hoje uma das maneiras mais eficientes de guiar um projeto do ínicio ao fim, sem complicações e mantendo o tempo inteiro o foco na entrega de valor para o cliente. Nesse livro, André Faria Gomes, renomado coach e líder de equipes, explica como os diferentes sabores de Agile podem fazer um projeto de sucesso. Aprenda como o Kanban, XP e Scrum podem ser usados em conjunto e onde cada um dos métodos se complementa, além de conhecer dicas para adotar as metodologias no seu dia a dia de trabalho.'
    },
    {
        id: 2,
        name: 'Entendendo Algoritmos: Um guia ilustrado para programadores e outros curiosos',
        price: 69.90,
        category: Category.programmation,
        imageUrl: '/assets/images/algoritmos.jpg',
        author: 'Aditya Y. Bhargava',
        publisher: 'Novatec Editora; 1ª edição (1 março 2018)',
        numberOfPages: 400,
        description: 'Um algoritmo nada mais é do que um procedimento passo a passo para a resolução de um problema. Os algoritmos que você mais utilizará como um programador já foram descobertos, testados e provados. Se você quer entendê-los, mas se recusa a estudar páginas e mais páginas de provas, este é o livro certo. Este guia cativante e completamente ilustrado torna simples aprender como utilizar os principais algoritmos nos seus programas.',
    },
    {
        id: 3,
        name: 'Amazon AWS: Descomplicando a computação na nuvem',
        price: 39.90,
        category: Category.cloud,
        imageUrl: '/assets/images/aws.jpg',
        author: 'Jonathan Lamim Antunes',
        publisher: 'Casa do Código (16 dezembro 2016)',
        numberOfPages: 266,
        description: 'Quando se trata de grandes aplicações, infraestrutura é um ponto muito importante, pois é preciso pensar em escalabilidade, gerenciamento e, principalmente, os serviços necessários para seu bom funcionamento. AWS ou Amazon Web Services é uma plataforma de serviços na nuvem que oferece soluções para armazenamento, redes e computação, em várias camadas. E o melhor de tudo, você pode administrar todos esses serviços através de uma interface web, ou também por APIs e linha de comando.',
    },
    {
        id: 4,
        name: 'Android: Como programar',
        price: 149.90,
        category: Category.programmation,
        imageUrl: '/assets/images/android.jpg',
        author: 'Harvey Deitel',
        publisher: 'Bookman; 2º edição (1 janeiro 2015)',
        numberOfPages: 728,
        description: 'Android: Como programar faz uma introdução clara e didática ao desenvolvimento de aplicativos, ideal para cursos de nível básico e intermediário. Com uma abordagem baseada em aplicativos, este livro discute as novas tecnologias por meio de 7 aplicativos Android totalmente testados, complementados por explicações e realces de código e saídas de exemplo. Você vai desenvolver os aplicativos Welcome App, Tip Calculator, Twitter® Searches, Flag Quiz, Cannon Game, Doodlz, Address Book. Inclui também: Desenvolvimento usando o IDE Eclipse com Android Development Tools (ADT) e material complementar sobre o Android Studio (em inglês) disponível online; Compatível com vários tamanhos/resoluções de tela; Acessibilidade, internacionalização, gráficos; Atividades, fragmentos, intenções, preferências; GUIs, layouts, menus, arquivos de recursos, listas, adaptadores, eventos, processamento de toque/gesto; Modo imersivo, estrutura de impressão, PrintHelper; Assets (imagens, áudio), animações de View; Threads, coleções, banco de dados SQLite; Compartilhamento social com intents implícitos; Google Play™, publicação, precificação, monetização, marketing, publicidade e venda incorporada ao aplicativo; Fundamentos de Java, classes, objetos, herança, polimorfismo, interfaces, tratamento de exceções, coleções, eventos, threads.',
    },
    {
        id: 5,
        name: 'Use a cabeça! SQL',
        price: 119.90,
        category: Category.dataBase,
        imageUrl: '/assets/images/sql.jpg',
        author: 'Lynn Beighley',
        publisher: 'Alta Books; 2ª edição (9 julho 2008)',
        numberOfPages: 488,
        description: 'O que você irá aprender com este livro?No mundo de hoje, dados é poder, mas o verdadeiro segredo do sucesso é ter poder sobre seus dados. Use a Cabeça SQL leva você ao coração da linguagem SQL, da sintaxe básica das queries, usando INSERT e SELECT, à dureza da manipulação do banco de dados com subqueries, joins e transactions. A medida que você avança na leitura, entenderá efetiva e efi cientemente o projeto e a criação de banco de dados, utilizando queries, normatização e joining. Você será então o verdadeiro mestre dos seus dados!Por que este livro parece tão diferente?Nós acreditamos que seu tempo é muito valioso para ser desperdiçado. Tendo como base a última pesquisa em neurobiologia, ciência cognitiva e teoria do aprendizado, Use a Cabeça SQL tem um visual rico, projetado na forma como seu cérebro funciona; não se trata de uma abordagem pesada que faz com que você caia em sono profundo.“Este livro não torna o SQL mais fácil, mas o torna desafiador, interessante e divertido. Isso até responde à pergunta ‘Como ensinar queries não relacionadas sem perder a vontade de viver?’ Esta é a formacorreta de aprender – é fácil, é vibrante e tem uma aparência incrível.”― Andrew Cumming, Autor de SQL Hacks, sqlzoo.net“Existem aqueles livros que você compra, livros que você guarda, livros que você deixa na sua mesa, e graças à equipe do Use a Cabeça, há uma última categoria, os livros da série Use a Cabeça. São aqueles livros com as páginas cheias de orelhas, usados e carregados para todos os lados. Use a Cabeça SQL está no topo da minha pilha”.― Bill Sawyer, Gerente de currículos, Oracle.',
    },
    {
        id: 6,
        name: 'Introdução ao MongoDB',
        price: 79.90,
        category: Category.dataBase,
        imageUrl: '/assets/images/mongodb.jpg',
        author: 'David Hows',
        publisher: 'Novatec Editora; 1ª edição (5 março 2015)',
        numberOfPages: 168,
        description: 'O livro Introdução ao MongoDB, mostra como um sistema de banco de dados orientado a documentos difere de um banco de dados relacional, explica como instalá-lo e começar a usá-lo. Você também conhecerá o básico sobre o design do MongoDB, incluindo a indexação geoespacial, aprenderá a navegar, a visualizar e a fazer consultas em seu banco de dados e a usar o GridFS com um pouco de Python.',
    },
    {
        id: 7,
        name: 'Oracle Database 11G SQL',
        price: 179.90,
        category: Category.dataBase,
        imageUrl: '/assets/images/oracle.jpg',
        author: 'Jason Price',
        publisher: 'Bookman; 1ª edição (18 agosto 2008)',
        numberOfPages: 684,
        description: 'Guia oficial da Oracle Press, este livro mostra como escrever instruções SQL e programas PL/SQL de alto desempenho e com recursos avançados. Escrita pelo expert Jason Price, a obra aborda detalhadamente os últimos recursos e ferramentas SQL, técnicas de otimização de desempenho, consultas avançadas, suporte à Java e XML.',
    },
    {
        id: 8,
        name: 'Java: Como Programar',
        price: 219.90,
        category: Category.programmation,
        imageUrl: '/assets/images/java.jpg',
        author: 'Paul Deitel',
        publisher: 'Pearson Universidades; 10ª edição (24 junho 2016)',
        numberOfPages: 968,
        description: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel®. Java: como programar, 10ª edição, fornece uma introdução clara, simples, envolvente e divertida à programação Java com ênfase inicial em objetos. Destaques incluem: rica cobertura dos fundamentos com exemplos reais; apresentação com ênfase inicial em classes e objetos; uso com Java™ SE 7, Java™ SE 8 ou ambos; Java™ SE 8 abordado em seções modulares opcionais; lambdas, fluxos e interfaces funcionais usando métodos padrão e estáticos do Java SE 8; Swing e GUI do JavaFX: elementos gráficos e multimídia; conjunto de exercícios ""Fazendo a diferença""; tratamento de exceções integrado; arquivos, fluxos e serialização de objetos; concorrência para melhor desempenho com multiprocessamento; o livro contém o conteúdo principal para cursos introdutórios; outros tópicos: recursão, pesquisa, classificação, coleções genéricas, estruturas de dados, multithreading, banco de dados (JDBC ™ e JPA).',
    },
    {
        id: 9,
        name: 'JavaScript: O Guia Definitivo',
        price: 139.90,
        category: Category.programmation,
        imageUrl: '/assets/images/javascript.jpg',
        author: 'David Flanagan',
        publisher: 'Bookman; 6ª edição (29 agosto 2012)',
        numberOfPages: 1080,
        description: 'Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web. Em sua 6ª edição, cuidadosamente reescrita para estar de acordo com as melhores práticas de desenvolvimento Web atuais, abrange ECMAScript 5 e HTML5 e traz novos capítulos que documentam jQuery e JavaScript do lado do servidor. Recomendado para programadores experientes que desejam aprender a linguagem de programação da Web e para programadores JavaScript que desejam ampliar seus conhecimentos e dominar a linguagem, este é o guia do programador e manual de referência de JavaScript completo e definitivo.',
    },
    {
        id: 10,
        name: 'Spring Boot: Microsserviços na prática',
        price: 109.90,
        category: Category.framework,
        imageUrl: '/assets/images/springboot.jpg',
        author: 'Caio Costa',
        publisher: 'Independently Published (29 março 2021)',
        numberOfPages: 84,
        description: 'Este livro é um guia básico para a criação de microsserviços utilizando o framework Spring Boot e alguns outros frameworks bastante conhecidos no mercado.',
    },
    {
        id: 11,
        name: 'Desenvolvimento de aplicações web com Angular',
        price: 39.90,
        category: Category.framework,
        imageUrl: '/assets/images/angular.jpg',
        author: 'William Pereira Alves',
        publisher: 'Alta Books; 1ª edição (2 maio 2019)',
        numberOfPages: 384,
        description: 'Este livro procura levar ao leitor os conhecimentos sobre o Angular capazes de permitir desenvolvimento de seus próprios projetos. Os diversos exemplos apresentam a instalação/configuração das ferramentas utilizadas no desenvolvimento, criação de tabelas com ngRepeat, vínculo de dados com ngModel, lista de opções criadas com ngOptions, validação de dados de formulários, definição de classes em Angular , construção de Web Service em PHP. O projeto final envolve consumo de Web Service para manipulação de banco de dados. O leitor também verá uma pequena introdução à linguagem TypeScript, base do Angular desde a versão 2. Para abranger tanto usuários do Windows quanto do Linux, a instalação e configuração das ferramentas é apresentada nesses dois ambientes. Todos os capítulos são apresentados de forma ricamente ilustrada, além de constarem diversos exercícios práticos. Em função da didática empregada, o livro abrange tanto iniciantes quanto profissionais já experientes, sendo indicado para adoção em cursos técnicos/profissionalizantes.',
    },
    {
        id: 12,
        name: 'Scrum: A arte de fazer o dobro do trabalho na metade do tempo',
        price: 29.90,
        category: Category.methodology,
        imageUrl: '/assets/images/scrum.jpg',
        author: 'Jeff Sutherland',
        publisher: 'Editora Sextante; 1ª edição (14 fevereiro 2019)',
        numberOfPages: 256,
        description: 'O mundo vem sofrendo um processo de mudança contínuo cada vez mais acelerado. Para quem acredita que deve haver uma maneira mais eficiente de fazer as coisas, Scrum é um livro instigante sobre o processo de liderança e gestão que está transformando a maneira como vivemos.',
    },
    {
        id: 13,
        name: 'Código limpo: Habilidades práticas do Agile Software',
        price: 79.90,
        category: Category.architecture,
        imageUrl: '/assets/images/codigolimpo.jpg',
        author: 'Robert C. Martin',
        publisher: 'Alta Books; 1ª edição (8 setembro 2009)',
        numberOfPages: 425,
        description: 'Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software. Martin se reuniu com seus colegas do Mentor Object para destilar suas melhores e mais ágeis práticas de limpar códigos “dinamicamente” em um livro que introduzirá gradualmente dentro de você os valores da habilidade de um profissional de softwares e lhe tornar um programador melhor –mas só se você praticar.Que tipo de trabalho você fará? Você lerá códigos aqui, muitos códigos. E você deverá descobrir o que está correto e errado nos códigos. E, o mais importante, você terá de reavaliar seus valores profissionais e seu comprometimento com o seu ofício.Código limpo está divido em três partes. Na primeira há diversos capítulos que descrevem os princípios, padrões e práticas para criar um código limpo.A segunda parte consiste em diversos casos de estudo de complexidade cada vez maior. Cada um é um exercício para limpar um código – transformar o código base que possui alguns problemas em um melhor e eficiente. A terceira parte é a compensação: um único capítulo com uma lista de heurísticas e “odores” reunidos durante a criação dos estudos de caso. O resultado será um conhecimento base que descreve a forma como pensamos quando criamos, lemos e limpamos um código.',
    },
    {
        id: 14,
        name: 'DevOps para leigos: os primeiros passos para o sucesso',
        price: 44.90,
        category: Category.architecture,
        imageUrl: '/assets/images/devops.jpg',
        author: 'Emily Freeman',
        publisher: 'Alta Books; 1ª edição (1 março 2021)',
        numberOfPages: 320,
        description: 'Com o DevOps, podemos acelerar o ciclo de vida de entrega de software ― entendendo processos, ferramentas e mindset que impulsionam sua cultura. O livro ajuda engenheiros de software e diretores tecnológicos a transformar suas organizações e adotar uma estrutura DevOps. Crie um estilo de desenvolvimento e entrega mais iterativo, centrado no cliente e que aumente a colaboração, elimine gargalos e acelere a produtividade da equipe.― Descubra as vantagens competitivas do DevOps― Adote uma tecnologia acessível, incluindo nuvem e containers― Converta sua organização para a metodologia DevOpsAbra este livro e descubra… - Quais são seus gargalos; - Como criar a estrutura DevOps; - Como colocar seu time a bordo; - Uma forma de adaptar a cultura organizacional; - Como aprender com o fracasso.',
    },
    {
        id: 15,
        name: 'UX Design: Guia Definitivo com as Melhores Práticas de UX',
        price: 59.90,
        category: Category.design,
        imageUrl: '/assets/images/ux.jpg',
        author: 'Will Grant',
        publisher: 'Novatec Editora (28 junho 2019)',
        numberOfPages: 208,
        description: 'Queremos que nossa UX seja genial. Queremos criar ótimas experiências de usuário. Queremos que a UX conduza o sucesso de nosso negócio com produtos de software proveitosos e usáveis. Este livro é baseado no conhecimento e treinamento de Jakob Nielsen e Don Norman para nos ajudar a construir corretamente nossa UX – de 101 formas! UX Design mostra as 101 práticas mais importantes que você precisa saber sobre usabilidade e design. É uma referência prática para profissionais de UX e um atalho para a realização de qualquer pessoa que precise de uma seleção clara e inteligente de princípios para guiar seu sucesso na área de UX. Aprenda os princípios-chave que conduzem a um design de UX genial.',
    },
]