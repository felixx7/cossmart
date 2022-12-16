import { Controller, Get, Param,Post, Query, Body  } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  public async getBooksList(): Promise<any> {
    
    try {
      const response = await this.appService.getBooksList();

      return response.data.works.map(item => {
        return {
          authors : item.authors[0].name,
          title : item.title,
          edition_count : item.edition_count
        }
      })
    } catch (error) {
      console.log(error)
    }


  }

  @Post()
  async pickBooks(@Body() pickBooks: any) {

    try {
      // Check duplicate edition_code
      let arrDataBook = []
      pickBooks.pick_books.forEach(element => {
        arrDataBook.push(
          element.edition_count
        ) 
      })
      if(this.hasDuplicates(arrDataBook)){
        return "Your Book (Edition Count) is Duplicate"
      }

      //Check If Not Exist
      const bookIsExist = await this.appService.getBooksList()

      let arrDataBookIsExist = []
      bookIsExist.data.works.forEach(element => {
        arrDataBook.forEach(el =>{
          if(el == element.edition_count){
            arrDataBookIsExist.push(element)
          }
        })
      })
      if(arrDataBookIsExist.length == 0){
        return "Your Book (Edition Count) is Not Exist"
      }

      //Get Detail Book
      const bookInformation = await this.appService.getBooksList()

      let arrDataDetailBook = []
      bookInformation.data.works.forEach(element => {
        arrDataBook.forEach(el =>{
          if(el == element.edition_count){
            arrDataDetailBook.push(element)
          }
        })
      })

      //Detail Book + Pick Up Schedule
      let borrowDetail = {
        pick_books :arrDataDetailBook,
        pick_up_schedule : pickBooks.pick_up_schedule
      }
      
      return borrowDetail

    } catch (error) {
      console.log(error)
    }

  }

  hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
  }
  

}
