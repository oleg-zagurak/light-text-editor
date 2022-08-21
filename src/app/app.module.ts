import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainTextComponent } from './components/main-text/main-text.component';
import { ToolsControllerComponent } from './components/tools-controller/tools-controller.component';
import { EditorFieldComponent } from './components/editor-field/editor-field.component';
import { EditorStylesComponent } from './components/editor-styles/editor-styles.component';
import { ContentGeneratorComponent } from './components/content-generator/content-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTextComponent,
    ToolsControllerComponent,
    EditorFieldComponent,
    EditorStylesComponent,
    ContentGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
