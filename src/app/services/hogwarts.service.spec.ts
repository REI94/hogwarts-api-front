import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HogwartsService } from './hogwarts.service';
import { of } from 'rxjs';

describe('HogwartsService', () => {
  let service: HogwartsService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HogwartsService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HogwartsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method getAllCharacters() returns correct object type', (done: DoneFn) => {

    const mockHouse = 'gryffindor';

    let mockResponse = [];

    const character = {
      name: 'Harry Potter',
      patronus: 'stag',
      age: NaN,
      image: ''
    }

    mockResponse.push(character);

    httpClientSpy.get.and.returnValue(of(mockResponse));

    service.getAllCharacters(mockHouse)
      .subscribe( res => {
        expect(res).toEqual(mockResponse);
        done();
      })
  });
});
