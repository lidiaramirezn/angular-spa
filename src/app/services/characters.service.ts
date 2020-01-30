import { Injectable } from '@angular/core';

@Injectable()
export class CharactersService {

  private charactersOP:any[] = [
    {
      nombre: "Monkey D. Luffy",
      summary: "Protagonista principal de la serie de manga y anime One Piece. Comió una fruta del diablo de clase paramecia llamada fruta Gomu Gomu, que le convirtió en un hombre de goma",
      img: "assets/img/luffy.png",
      nacimiento: "5 de mayo",
      edad: "19 años",
      alias: "Sombrero de Paja, Mugiwara",
      bio: "Protagonista principal de la serie de manga y anime One Piece. Comió una fruta del diablo de clase paramecia llamada fruta Gomu Gomu, que le convirtió en un hombre de goma. La escasa inteligencia de Luffy es inversamente proporcional a su valentía, es decir, se trata de una persona muy poco inteligente y que apenas conoce el miedo. Estos dos rasgos son la principal razón de su incapacidad para comprender el peligro, y contribuye enormemente a su total falta de temor en la mayoría de las situaciones."
    },
    {
      nombre: "Roronoa Zoro",
      summary: "Antiguo cazarrecompensas y actual espadachín. Es famoso por ser un maestro de la espada, siendo usuario del estilo santoryu, y por su fuerza sobrehumana",
      img: "assets/img/zoro.png",
      nacimiento: "11 de noviembre",
      edad: "21 años",
      alias: "El Cazador de Piratas, Marimo",
      bio: "Antiguo cazarrecompensas y actual espadachín. Es famoso por ser un maestro de la espada, siendo usuario del estilo santoryu, y por su fuerza sobrehumana.  Usa tres espadas, llevando una en cada mano y otra en la boca. Es valiente, fuerte y siempre cumple su palabra. Su sueño es llegar a ser El Mejor Espadachín del Mundo. Es de carácter reservado, aunque muy a menudo actúa de manera cómica; también tiene un pésimo sentido de la orientación, al grado de perderse incluso en caminos rectos o cuando alguien lo está guiando.",
    },
    {
      nombre: "Namy",
      summary: "La navegante de los Piratas de Sombrero de Paja, responsable de evaluar las indicaciones y decidir por donde ira el barco. Nami también tiende a actuar como tesorera de la tripulación",
      img: "assets/img/nami.png",
      nacimiento: "3 de julio",
      edad: "20 años",
      alias: "Ga​ta Ladrona",
      bio: "La navegante de los Piratas de Sombrero de Paja, responsable de evaluar las indicaciones y decidir por donde ira el barco. Nami también tiende a actuar como tesorera de la tripulación. Al igual que Nico Robin, es de las más inteligentes y maduras de su tripulación. Su mayor sueño es recorrer el mundo y crear su propio mapa mundial.",
    },
    {
      nombre: "Usopp",
      summary: "Es el francotirador de los Piratas de Sombrero de Paja. Posee una puntería excepcional; es capaz de darle a varias personas sin fallar ni una vez a distancias en las que apenas son visibles",
      img: "assets/img/usopp.png",
      nacimiento: "1 de abril",
      edad: "21 años",
      alias: "Sogeking",
      bio: "Es el francotirador de los Piratas de Sombrero de Paja. Posee una puntería excepcional; es capaz de darle a varias personas sin fallar ni una vez a distancias en las que apenas son visibles. Usopp es uno de los más sentimentales de los Piratas Sombrero de Paja, y llora o se enoja en momentos de estrés emocional."
    },
    {
      nombre: "Sanji",
      summary: "Es el cocinero de los Piratas de Sombrero de Paja. Su sueño es encontrar el All Blue, el océano donde se encuentran todas las especies de peces de los cuatro mares",
      img: "assets/img/sanji.png",
      nacimiento: "2 de marzo",
      edad: "21 años",
      alias: "Pierna Negra, Cocinero Pervertido",
      bio: "Es el cocinero de los Piratas de Sombrero de Paja. Su sueño es encontrar el All Blue, el océano donde se encuentran todas las especies de peces de los cuatro mares y el paraíso para cualquier cocinero. Sanji es bastante más perceptivo de lo que parece ya que se da cuenta de cosas acerca de las situaciones que se les escapan a otros de sus compañeros. Es un mujeriego empedernido y constantemente flirtea con cualquier mujer bella que vea, debido a esto, Zoro le ha puesto el título de Cocinero Pervertido"
    },
    {
      nombre: "Tony Tony Chopper",
      summary: "Es el médico de los Piratas de Sombrero de Paja, con forma de reno-humanoide. Es un Reno de nariz azul que comió la fruta Hito Hito, adquiriendo forma e inteligencia humana.",
      img: "assets/img/chopper.png",
      nacimiento: "24 de diciembre",
      edad: "17 años",
      alias: "Chopper",
      bio: "Es el médico de los Piratas de Sombrero de Paja, con forma de reno-humanoide. Es un Reno de nariz azul que comió la fruta Hito Hito, adquiriendo forma e inteligencia humana. Chopper es muy tímido y tan ingenuo. Cuando ve a alguien muy herido o en mal estado, se asusta mucho y empieza a gritar llamando a un médico, hasta que alguien le recuerda o se da cuenta de que él es médico"
    },
    {
      nombre: "Nico Robin",
      summary: "Es la arqueóloga, comió una fruta del diablo llamada fruta Hana Hana. La mayoría de sus ataques los realiza haciendo brotar manos, casi siempre para neutralizar a un enemigo.",
      img: "assets/img/robin.png",
      nacimiento: "6 de febrero",
      edad: "30 años",
      alias: "",
      bio: "Es la arqueóloga, comió una fruta del diablo llamada fruta Hana Hana, que le permite hacer brotar partes de su cuerpo en cualquier lugar. La mayoría de sus ataques los realiza haciendo brotar manos, casi siempre para neutralizar a un enemigo o desarmarle. Su sueño es conocer la verdadera historia investigando en los poneglyphs."
    },
    {
      nombre: "Franky",
      summary: "Tras haber reconstruido su cuerpo, Franky se hizo un cyborg; mitad humano mitad robot. Es el octavo miembro de la tripulación de Luffy, tomando el puesto de carpintero.",
      img: "assets/img/franky.png",
      nacimiento: "9 de marzo",
      edad:"36 años",
      alias: "",
      bio: 'Es un carpintero de gran nivel cuyo verdadero nombre es Cutty Flam, es un cyborg (mitad androide, mitad humano) quien era el líder de la Familia Franky, un grupo de desmanteladores de Water 7 que hacen a la vez el trabajo de cazadores de recompensas. Tiene grandes capacidades de lucha, gracias a que se creó unos brazos más grandes y como todo su cuerpo es de metal puede ocupar varias partes de su cuerpo y hacerlas armas excepcionales'
    },
    {
      nombre: "Brook",
      summary: "Es el músico de los Piratas de Sombrero de Paja, comió una fruta del diablo llamada fruta Yomi Yomi, y ahora es un no-muerto. Es un esqueleto viviente. Brook usa la música para combatir.",
      img: "assets/img/brook.png",
      nacimiento: "3 de abril",
      edad:"90 años",
      alias: "",
      bio: 'Es el músico de los Piratas de Sombrero de Paja. Brook comió la Fruta Yomi Yomi, la cual hizo que su cuerpo pudiera revivir, ya que él había muerto antes. Esto hizo que su cuerpo se descompusiera y le diera su actual apariencia (la de un esqueleto), es capaz de correr en el agua sin hundirse. Brook usa la música para combatir.'
    },
  ];

  constructor() { 
    console.log('Servicio listo');
  }

  getCharacters():Character[] {
    return this.charactersOP;
  }

  getCharacter(idx:string) {
    return this.charactersOP[idx]
  }

  searchCharacter(text: string) {
    let characterArray:Character[] = [];
    characterArray = this.charactersOP.filter(character => {
        return character.nombre !== text.trim().toLowerCase();
      }
    )    
    return characterArray;
  }
}

export interface Character {
  nombre: string;
  bio: string;
  img: string;
  nacimiento: string;
  edad: string;
  alias: string;
}