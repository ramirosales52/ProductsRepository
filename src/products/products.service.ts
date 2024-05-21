import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>) { }

  createProduct(product: CreateProductDto) {
    const newProduct = this.productRepository.create(product)
    return this.productRepository.save(newProduct)
  }

  getProducts() {
    return this.productRepository.find()
  }
}
