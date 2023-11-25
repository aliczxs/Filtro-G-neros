// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmes = [
    { 
      nome: 'Para Todos Os Garotos que Já Amei',
      categoria: 'Romance',
      descricao: 'Lara Jean Covey escreve cartas secretas para todos os seus antigos amores. Um dia, as cartas são misteriosamente enviadas, levando a sua vida amorosa a sair do controle.',
      imagem: 'https://cinepop.com.br/wp-content/uploads/2020/02/poster.jpg'
    },
    { 
      nome: 'Simplesmente Acontece',
      categoria: 'Romance',
      descricao: 'Rosie e Alex são amigos inseparáveis desde a infância, mas são separados quando Alex e sua família se mudam para os Estados Unidos. Ao longo dos anos, diferentes circunstâncias os impedem de ficar juntos, mesmo quando está claro que são feitos um para o outro.',
      imagem: 'https://www.minhavidaliteraria.com.br/wp-content/uploads/2015/03/Simplesmente-Acontece_Filme.jpg'
    },
    { 
      nome: 'Perdida',
      categoria: 'Romance',
      descricao: 'A adolescente Jennifer desaparece sem deixar vestígios. Sua mãe, Claire, embarca em uma jornada angustiante para descobrir a verdade e salvar sua filha antes que seja tarde demais.',
      imagem: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/05/12/681669361-perdida-arte-de-divulgacao-1.jpg'
    },
    { 
      nome: 'Jogos Vorazes',
      categoria: 'Aventura',
      descricao: 'Em um futuro distópico, jovens de diferentes distritos são escolhidos para participar dos Jogos Vorazes, um evento mortal transmitido para todo o país. Katniss Everdeen se voluntaria para substituir sua irmã na competição.',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/42/HungerGamesPoster.jpg/250px-HungerGamesPoster.jpg'
    },
    { 
      nome: 'Jogos Vorazes - Em Chamas',
      categoria: 'Aventura',
      descricao: 'Após vencerem os Jogos Vorazes, Katniss e Peeta são forçados a participar do Massacre Quaternário. Enquanto isso, uma rebelião está crescendo nos distritos contra a opressão do Capitólio.',
      imagem: 'https://m.media-amazon.com/images/S/pv-target-images/9000632cc49fbcfa07d83995319b4311976ed90ee3f52a196e7ab74ff0e59f70.jpg'
    },
    { 
      nome: 'Jogos Vorazes: A Esperança',
      categoria: 'Aventura',
      descricao: 'Katniss lidera a rebelião contra o Capitólio, buscando liberdade para os distritos oprimidos. A guerra finalmente atinge seu clímax, e a esperança emerge em meio ao caos.',
      imagem: 'https://br.web.img2.acsta.net/pictures/210/473/21047331_201310071632457.jpg'
    },
    { 
      nome: 'Maze Runner: Correr ou Morrer',
      categoria: 'Ação',
      descricao: 'Thomas acorda em um elevador sem memória e é enviado para uma clareira cercada por um labirinto. Com um grupo de jovens, ele tenta descobrir o propósito do labirinto e encontrar uma saída.',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/c7/Maze_runner.jpg/250px-Maze_runner.jpg'
    },
    { 
      nome: 'Maze Runner: Prova de Fogo',
      categoria: 'Ação',
      descricao: 'Thomas e seus amigos escapam do labirinto, apenas para descobrir que o mundo exterior está devastado por uma doença mortal. Agora, eles enfrentam novos desafios e segredos obscuros.',
      imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/16/01/18/18/50/596680.jpg'
    },
    { 
      nome: 'Oppenheimer',
      categoria: 'Ação',
      descricao: 'Baseado em eventos reais, este drama retrata a vida do físico J. Robert Oppenheimer, líder do projeto Manhattan que resultou na criação da primeira bomba atômica.',
      imagem: 'https://br.web.img2.acsta.net/pictures/23/05/08/10/29/0695770.jpg'
    },
    { 
      nome: 'Teenagers - As Apimentadas',
      categoria: 'Ficção Adolescente',
      descricao: 'A animada equipe de líderes de torcida "The Toros" enfrenta desafios quando uma nova integrante, a tímida Torrance, assume a liderança. Juntas, elas buscam a vitória e a verdadeira amizade.',
      imagem: 'https://m.media-amazon.com/images/S/pv-target-images/91e7b9ae25696af874d508c45a3816590e515867fe7d705d942e1ed9ce291218.jpg'
    },
    { 
      nome: 'Confissões de uma Garota Excluída',
      categoria: 'Ficção Adolescente',
      descricao: 'Tired of being an outcast, a high school student seeks revenge on her classmates by publishing a scandalous and anonymous zine. As she gains popularity, she begins to question her actions and the true meaning of acceptance.',
      imagem: 'https://m.media-amazon.com/images/I/71L427Qi9PL._AC_UF1000,1000_QL80_.jpg'
    },
    { 
      nome: 'Modo Avião',
      categoria: 'Ficção Adolescente',
      descricao: 'Uma famosa influenciadora digital vive sua vida nas redes sociais, mas sua obsessão pela internet a leva a um acidente. Para se reconectar com a vida real, ela embarca em uma jornada de autodescoberta.',
      imagem: 'https://br.web.img2.acsta.net/pictures/19/12/17/15/42/3915121.jpg'
    },
  ];

  categoriaSelecionada = '';
  filmesFiltrados = this.filmes;

  filtrarFilmes() {
    this.filmesFiltrados = this.filmes.filter(filme =>
      this.categoriaSelecionada ? filme.categoria.toLowerCase() === this.categoriaSelecionada.toLowerCase() : true
    );
  }
}
