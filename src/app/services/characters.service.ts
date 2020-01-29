import { Injectable } from '@angular/core';

@Injectable()
export class CharactersService {

  private charactersOP:any[] = [
    {
      nombre: "Monkey D. Luffy",
      bio: "Protagonista principal de la serie de manga y anime One Piece. Comió una fruta del diablo de clase paramecia llamada fruta Gomu Gomu, que le convirtió en un hombre de goma",
      img: "assets/img/luffy.png",
      nacimiento: "5 de mayo",
      edad: "19 años",
      alias: "Sombrero de Paja, Mugiwara"
    },
    {
      nombre: "Roronoa Zoro",
      bio: "Es un antiguo cazarrecompensas y actual espadachín. Fue el primer miembro en unirse a la banda. Es famoso por ser un maestro de la espada, siendo usuario del estilo santoryu, y por su fuerza sobrehumana",
      img: "assets/img/zoro.png",
      nacimiento: "11 de noviembre",
      edad: "21 años",
      alias: "El Cazador de Piratas, Marimo"
    },
    {
      nombre: "Namy",
      bio: "La navegante de los Piratas del Sombrero de Paja, responsable de evaluar las indicaciones y decidir por donde ira el barco, ya que navegar es difícil y sobre todo en el Grand Line, Nami también tiende a actuar como tesorera de la tripulación",
      img: "assets/img/nami.png",
      nacimiento: "3 de julio",
      edad: "20 años",
      alias: "Ga​ta Ladrona"
    },
    {
      nombre: "Usopp",
      bio: "Es el francotirador de los Piratas de Sombrero de Paja. Como su padre, posee una puntería excepcional; es capaz de darle a varias personas sin fallar ni una vez a distancias en las que apenas son visibles",
      img: "assets/img/usopp.png",
      nacimiento: "1 de abril",
      edad: "21 años",
      alias: "Sogeking"
    },
    {
      nombre: "Sanji",
      bio: "Es el cocinero de los Piratas de Sombrero de Paja, es uno de los combatientes más fuertes de la tripulación . Su sueño es encontrar el All Blue, el océano donde se encuentran todas las especies de peces de los cuatro mares",
      img: "assets/img/sanji.png",
      nacimiento: "2 de marzo",
      edad: "21 años",
      alias: "Pierna Negra, Cocinero Pervertido"
    },
    {
      nombre: "Tony Tony Chopper",
      bio: "Es el médico de los Piratas de Sombrero de Paja. Es un Reno de nariz azul que comió la fruta Hito Hito, adquiriendo forma e inteligencia humana.",
      img: "assets/img/chopper.png",
      nacimiento: "24 de diciembre",
      edad: "17 años",
      alias: "Chopper"
    },
    {
      nombre: "Nico Robin",
      bio: "Es la arqueóloga, comió una fruta del diablo llamada fruta Hana Hana, que le permite hacer brotar partes de su cuerpo en cualquier lugar. La mayoría de sus ataques los realiza haciendo brotar manos, casi siempre para neutralizar a un enemigo o desarmarle.",
      img: "assets/img/robin.png",
      nacimiento: "6 de febrero",
      edad: "30 años",
      alias: ""
    },
    {
      nombre: "Franky",
      bio: "",
      img: "assets/img/franky.png",
      nacimiento: "",
      edad:"",
      alias: ""
    },
    {
      nombre: "Brook",
      bio: "",
      img: "assets/img/brook.png",
      nacimiento: "",
      edad:"",
      alias: ""
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