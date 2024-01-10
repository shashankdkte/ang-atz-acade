import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EditorModule } from "@tinymce/tinymce-angular";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "../app/header/header.component";
import { RecipesComponent } from "../app/recipes/recipes.component";
import { RecipeDetailComponent } from "../app/recipes/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "../app/recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "../app/recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingComponent } from "../app/shopping/shopping.component";
import { ShoppingEditComponent } from "../app/shopping/shopping-edit/shopping-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule, EditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
