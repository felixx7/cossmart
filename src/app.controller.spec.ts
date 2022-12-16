import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('getBooksList Data', async () => {

      const response = await appService.getBooksList();
      
      let res = response.data.works.map(item => {
        return {
          authors : item.authors[0].name,
          title : item.title,
          edition_count : item.edition_count
        }
      })

      let test = false
      if(res.length > 0){
        test = true
      }

      expect(true).toBe(test);
    });

    it('Your Book (Edition Count) is Duplicate', async () => {

      let dataTest = {
        "pick_books": [
            {
                "edition_count": 1608
            },
            {
                "edition_count": 969
            },
            {
              "edition_count": 969
            }
        ],
        "name": "Aditya",
        "pick_up_schedule": "2022-12-15T14:06:40.208Z"
        
      }  

      const response = await appController.pickBooks(dataTest);
      
      expect("Your Book (Edition Count) is Duplicate").toBe(response);
    });

    it('Your Book (Edition Count) is Not Exist', async () => {

      let dataTest = {
        "pick_books": [
          {
              "edition_count": 999999
          },
          {
              "edition_count": 9999
          }
        ],
        "name": "Aditya",
        "pick_up_schedule": "2022-12-15T14:06:40.208Z"
        
      }  

      const response = await appController.pickBooks(dataTest);
      
      expect('Your Book (Edition Count) is Not Exist').toBe(response);
    });

    it('Success Send Pick Books', async () => {

      let dataTest = {
        "pick_books": [
            {
                "edition_count": 1608
            },
            {
                "edition_count": 969
            }
        ],
        "name": "Aditya",
        "pick_up_schedule": "2022-12-15T14:06:40.208Z"
        
      }  

      const response = await appController.pickBooks(dataTest);
      
      let test = false
      if(response){
        test = true
      }

      expect(true).toBe(test);
    });
    

  });
});
