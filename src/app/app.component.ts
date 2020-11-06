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
      image: '/assets/apple.gif'
    },
    {
      name: 'lemon',
      alias: 'lemon',
      price: 5,
      image: '/assets/lemon.jpg'
    },
    {
      name: 'grapes',
      alias: 'grapes',
      price: 14,
      image: '/assets/grapes.png'
    },
    {
      name: 'passionfruit',
      alias: 'passionfruit',
      price: 32,
      image: '/assets/passion-fruit.png'
    },
    {
      name: 'rasberry',
      alias: 'rasberry',
      price: 7,
      image: '/assets/raspberry.png'
    },
    {
      name: 'watermelon',
      alias: 'watermelon',
      price: 17,
      image: '/assets/watermelon.jpg'
    },
    {
      name: 'orange',
      alias: 'orange',
      price: 12,
      image: '/assets/orange.jpg'
    },
    {
      name: 'strawberry',
      alias: 'strawberry',
      price: 14,
      image: '/assets/strawberry.png'
    },
    {
      name: 'kiwi',
      alias: 'kiwi',
      price: 3,
      image: '/assets/kiwi.png'
    },
    {
      name: 'cherry',
      alias: 'cherry',
      price: 6,
      image: '/assets/cherry.png'
    },
    {
      name: 'carrot',
      alias: 'carrot',
      price: 5,
      image: '/assets/carrot.png'
    },
    {
      name: 'avocado',
      alias: 'avocado',
      price: 5,
      image: '/assets/avocado.png'
    },
    {
      name: 'pineapple',
      alias: 'pineapple',
      price: 5,
      image: '/assets/pineapple.png'
    },
  ]

  //bodye eklenecek imageler için boş dizi
  selectedFruits = [];
  sum = 0;
  obj;

  ngOnInit(): void {


  }

  clicktedElement(event) {

    
    this.selectedFruits.find((findedFruit) => {
      if (findedFruit.name === event.name) { 
        console.log('Sepette var!!');
      } 
    })
    this.selectedFruits.push(event);
    this.sum = this.sum + event.price;

  }



}
