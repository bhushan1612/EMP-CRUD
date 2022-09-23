import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpHeaderComponent } from './emp-header/emp-header.component';
import { EmpSidebarComponent } from './emp-sidebar/emp-sidebar.component';
import { EmpFooterComponent } from './emp-footer/emp-footer.component';
import { EmpAddformComponent } from './emp-addform/emp-addform.component';
import { EmpViewformComponent } from './emp-viewform/emp-viewform.component';
import { EmpViewdataComponent } from './emp-viewdata/emp-viewdata.component';
import { EmpUpdatedataComponent } from './emp-updatedata/emp-updatedata.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpHeaderComponent,
    EmpSidebarComponent,
    EmpFooterComponent,
    EmpAddformComponent,
    EmpViewformComponent,
    EmpViewdataComponent,
    EmpUpdatedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
