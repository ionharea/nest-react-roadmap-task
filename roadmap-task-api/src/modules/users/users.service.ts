import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../../types/user';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}

  private readonly apiUrl = this.configService.get('TYPICODE_URL');

  getUsers = async () => {
    try {
      const { data }: { data: User[] } = await axios.get(
        `${this.apiUrl}/users`,
      );
      return data;
    } catch {
      return null;
    }
  };

  getUser = async (userId: number) => {
    try {
      const { data }: { data: User } = await axios.get(
        `${this.apiUrl}/users/${userId}`,
      );
      return data;
    } catch {
      return null;
    }
  };
}
