import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { IBook } from './book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  async create(data: IBook) {
    const find = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (find) {
      throw new Error('Book already exists.');
    }

    const book = this.prisma.book.create({
      data,
    });
    return book;
  }

  async getAll(): Promise<IBook[]> {
    return this.prisma.book.findMany();
  }

  async delete(id: string) {
    const book = await this.find(id);
    if (!book) {
      throw new Error('Book not found.');
    }
    return await this.prisma.book.delete({
      where: {
        id: id,
      },
    });
  }
  private async find(id: string) {
    return await this.prisma.book.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, data: IBook): Promise<boolean> {
    const book = await this.find(id);
    if (!book) {
      throw new Error('Book not found.');
    }
    await this.prisma.book.update({
      data,
      where: {
        id: id,
      },
    });
    return true;
  }
}
