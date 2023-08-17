import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
      {
        id:1,
        name: 'Adana Dürüm',
        cookTime: '20-30',
        price: 180,
        favorite: false,
        origins: ['Adana'],
        stars:4.5,
        imageUrl: '/assets/images/adana-durum.jpg',
        tags: ['Yerli', 'Kebap']
      },
      {
        id:2,
        name: 'Hamburger',
        cookTime: '10-15',
        price: 150,
        favorite: true,
        origins: ['ABD'],
        stars:4.2,
        imageUrl: '/assets/images/hamburger.jpg',
        tags: ['Yabancı', 'Fast-Food']
      },
      {
        id:3,
        name: 'Lahmacun',
        cookTime: '20-30',
        price: 50,
        favorite: true,
        origins: ['Urfa'],
        stars:5,
        imageUrl: '/assets/images/lahmacun.webp',
        tags: ['Yerli', 'Çok Beğenilen']
      },
      {
        id:4,
        name: 'Patates Kızartması',
        cookTime: '10-15',
        price: 30,
        favorite: false,
        origins: ['Belçika'],
        stars:4.5,
        imageUrl: '/assets/images/patates.jpg',
        tags: ['Yabancı', 'Fast-Food']
      },
      {
        id:5,
        name: 'Sushi',
        cookTime: '20-30',
        price: 150,
        favorite: false,
        origins: ['Japonya'],
        stars:4.7,
        imageUrl: '/assets/images/sushi.jpg',
        tags: ['Yabancı', 'Balık']
      },
      {
        id:6,
        name: 'Baklava',
        cookTime: '20-30',
        price: 70,
        favorite: true,
        origins: ['Gaziantep'],
        stars:4.5,
        imageUrl: '/assets/images/Baklava.png',
        tags: ['Yerli', 'Tatlı']
      }
    ]
  }
}
