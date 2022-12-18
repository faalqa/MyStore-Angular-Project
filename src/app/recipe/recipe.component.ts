import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/Ingredient';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  name: string = 'Salad'

  ingredients: Ingredient[] = []


  ngOnInit(): void {
    this.ingredients = [
      {
        name: 'Tomato',
        quantity: '5 pieces',
      },
      {
        name: 'Carrot',
        quantity: '7 pieces',
      },
      {
        name: 'Lemon',
        quantity: '10 ml',
      }
  ]
  }
}
