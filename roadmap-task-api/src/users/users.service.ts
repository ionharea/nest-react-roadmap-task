import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}

  private apiUrl = this.configService.get('TYPICODE_URL');

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
