import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>) { }

  createProduct(product: CreateProductDto) {
    const newProduct = this.productRepository.create(product)
    return this.productRepository.save(newProduct)
  }

  getProducts() {
    return this.productRepository.find({
      relations: ['productType']
    })
  }

  async getProduct(id: number) {
    const productFound = await this.productRepository.findOne({
      where: {
        id
      }
    })

    if (!productFound) {
      return new HttpException("Product not found", HttpStatus.NOT_FOUND)
    }

    return productFound
  }

  async updateProduct(id: number, product: UpdateProductDto) {
    const productFound = await this.productRepository.findOne({
      where: {
        id
      }
    })

    if (!productFound) {
      return new HttpException("Product not found", HttpStatus.NOT_FOUND)
    }

    const updatedProduct = Object.assign(productFound, product)
    return this.productRepository.save(updatedProduct)
  }

}
