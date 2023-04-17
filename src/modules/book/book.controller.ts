import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { IBook } from "./book.dto";

@Controller("book")
export class BookController {
  constructor(private readonly Bookservice: BookService) {}

  @Post()
  async create(@Body() data: IBook) {
    return this.Bookservice.create(data);
  }

  @Get()
  async getAll() {
    return await this.Bookservice.getAll();
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: IBook) {
    this.Bookservice.update(id, data);
  }

  @Delete(":id")
  async Delete(@Param("id") id: string) {
    this.Bookservice.delete(id);
  }
}
