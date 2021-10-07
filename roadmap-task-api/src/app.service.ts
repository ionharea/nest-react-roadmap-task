import { Injectable } from '@nestjs/common';
import axios from 'axios';

const TYPICODE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class AppService {
  getUser = async (id: number) => {
    try {
      const { data } = await axios.get(`${TYPICODE_URL}/users/${id}`);
      return data;
    } catch {
      return undefined;
    }
  };
  getUsers = async () => {
    try {
      const { data } = await axios.get(`${TYPICODE_URL}/users`);
      return data;
    } catch {
      return undefined;
    }
  };
}
