import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EditorModule } from "@tinymce/tinymce-angular";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EditorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
