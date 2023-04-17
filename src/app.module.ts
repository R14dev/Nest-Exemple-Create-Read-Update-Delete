import { Module } from "@nestjs/common";
import { BookController } from "./modules/book/book.controller";
import { BookService } from "./modules/book/book.service";
import { PrismaService } from "./database/PrismaService";

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService, PrismaService],
})
export class AppModule {}
