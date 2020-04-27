import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactModelComponent } from './contact-model/contact-model.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { APP_BASE_HREF } from '@angular/common';



describe('AppComponent', () => {
  const routes: Routes = [
    {path:'', redirectTo:'/contact', pathMatch:'full'},
    {path: 'contact', component:ContactListComponent},
    {path: 'contactModel', component:ContactModelComponent},
    {path: 'editContact/:id', component:EditContactComponent}
 ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent,
        ContactListComponent,
        ContactModelComponent,
        EditContactComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'contact-info'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('contact-info');
  }));

  it('should render title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Digital Phonebook');
  }));
});
