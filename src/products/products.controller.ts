import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { ProductEntity } from 'src/entities/product.entity';

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) { }

  @Get()
  getProducts(): Promise<ProductEntity[]> {
    return this.productsService.getProducts()
  }

  @Post()
  createUser(@Body() newProduct: CreateProductDto): Promise<ProductEntity> {
    return this.productsService.createProduct(newProduct)
  }
}
