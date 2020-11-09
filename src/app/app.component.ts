import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'groceryStore';

  fruits = [
    {
      name: 'apple',
      alias: 'apple',
      price: 25,
      image: '/assets/apple.gif',
      number: 1
    },
    {
      name: 'lemon',
      alias: 'lemon',
      price: 5,
      image: '/assets/lemon.jpg',
      number: 1

    },
    {
      name: 'grapes',
      alias: 'grapes',
      price: 14,
      image: '/assets/grapes.png',
      number: 1

    },
    {
      name: 'passionfruit',
      alias: 'passionfruit',
      price: 32,
      image: '/assets/passion-fruit.png',
      number: 1

    },
    {
      name: 'rasberry',
      alias: 'rasberry',
      price: 7,
      image: '/assets/raspberry.png',
      number: 1

    },
    {
      name: 'watermelon',
      alias: 'watermelon',
      price: 17,
      image: '/assets/watermelon.jpg',
      number: 1

    },
    {
      name: 'orange',
      alias: 'orange',
      price: 12,
      image: '/assets/orange.jpg',
      number: 1

    },
    {
      name: 'strawberry',
      alias: 'strawberry',
      price: 14,
      image: '/assets/strawberry.png',
      number: 1

    },
    {
      name: 'kiwi',
      alias: 'kiwi',
      price: 3,
      image: '/assets/kiwi.png',
      number: 1

    },
    {
      name: 'cherry',
      alias: 'cherry',
      price: 6,
      image: '/assets/cherry.png',
      number: 1

    },
    {
      name: 'carrot',
      alias: 'carrot',
      price: 5,
      image: '/assets/carrot.png',
      number: 1

    },
    {
      name: 'avocado',
      alias: 'avocado',
      price: 5,
      image: '/assets/avocado.png',
      number: 1

    },
    {
      name: 'pineapple',
      alias: 'pineapple',
      price: 5,
      image: '/assets/pineapple.png',
      number: 1

    },
  ]

  //bodye eklenecek imageler için boş dizi
  selectedFruits = [];
  sum = 0;
  obj;
  ngOnInit(): void {


  }

  clicktedElement(event) {
    let bulunan = this.selectedFruits.find((findedFruit) => {
      return findedFruit.name === event.name;

    })

    if (!bulunan) {
      this.selectedFruits.push(event);
    }
    else{
    console.log(bulunan.number++);

    }
    this.sum = this.sum + event.price;
  }



}
