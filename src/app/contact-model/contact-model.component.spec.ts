import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContactModelComponent } from './contact-model.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('ContactModelComponent', () => {
  let component: ContactModelComponent;
  let fixture: ComponentFixture<ContactModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ], 
      declarations: [ ContactModelComponent ],
      providers: [ HttpClientTestingModule, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
