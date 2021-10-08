import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../../types/user';
import {
  DEF_LIMIT,
  DEF_PAGE,
} from '../../global/constants/defPaginationParams';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}

  private readonly apiUrl = this.configService.get('TYPICODE_URL');

  getUsers = async (page = DEF_PAGE, limit = DEF_LIMIT) => {
    try {
      const { data }: { data: User[] } = await axios.get(
        `${this.apiUrl}/users?_page=${page}&_limit=${limit}`,
      );
      return data;
    } catch {
      return null;
    }
  };

  getUser = async (userId: string) => {
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
