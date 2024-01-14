import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent {
  title = "RecipeListComponent";
  recipes: Recipe[] = [
    new Recipe('Chicken Momos', 'Best steamed momos with mustard sauce','https://placehold.co/400'),
    new Recipe('Beef Mustard', 'Rare medium beef with pariyane sauce','https://placehold.co/400')
  ]
}
