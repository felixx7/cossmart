import { Injectable } from '@nestjs/common';
import axios,{ AxiosResponse } from 'axios';

@Injectable()
export class AppService {

  public async getBooksList(): Promise<AxiosResponse> {
    return axios.get('http://openlibrary.org/subjects/love.json');
  }
}