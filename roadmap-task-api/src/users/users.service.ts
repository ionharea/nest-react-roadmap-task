import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}

  private apiUrl = this.configService.get('TYPICODE_URL');

  getUser = async (id: number) => {
    try {
      const { data } = await axios.get(`${this.apiUrl}/users/${id}`);
      return data;
    } catch {
      return null;
    }
  };
  getUsers = async () => {
    try {
      const { data } = await axios.get(`${this.apiUrl}/users`);
      return data;
    } catch {
      return null;
    }
  };
}
