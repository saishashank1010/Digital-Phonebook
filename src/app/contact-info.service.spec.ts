import { ContactInfoService } from './contact-info.service';
import { Contact } from './contact';
import { of } from 'rxjs';

describe('ContactInfoService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let contactInfoService: ContactInfoService;
  
  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    contactInfoService = new ContactInfoService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(contactInfoService).toBeTruthy();
  });
  
  it('should return expected contacts (HttpClient called once)', () => {
    const expectedContacts: Contact[] =
    [{id:11, firstName: 'Abhishek',lastName:'Singh',email:'abhishek.singh@trial.com',phoneNumber:4269695612,status:'Active'},
      {id:12, firstName: 'Aakanksha',lastName:'Channa',email:'aakanksha.channa@trial.com',phoneNumber:4269699934,status:'Inactive'}];
  
      httpClientSpy.get.and.returnValue(of(expectedContacts));
  
      contactInfoService.getContacts().subscribe(
      contacts => expect(contacts).toEqual(expectedContacts, 'expected contacts'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected contact of given id (HttpClient called once)', () => {
    const mockId = 11;
    const expectedContact: Contact =
    {id:11, firstName: 'Abhishek',lastName:'Singh',email:'abhishek.singh@trial.com',phoneNumber:4269695612,status:'Active'}

    
      httpClientSpy.get.and.returnValue(of(expectedContact));
  
      contactInfoService.getContactById(mockId).subscribe(
      contacts => expect(contacts).toEqual(expectedContact, 'expected contact'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
