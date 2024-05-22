import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductTypesEntity } from 'src/entities/productType.entity';
import { Repository } from 'typeorm';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
// import { UpdateProductTypeDto } from './dto/update-product-type.dto';

@Injectable()
export class ProductTypeService {

  constructor(
    @InjectRepository(ProductTypesEntity) private productTypesRepository: Repository<ProductTypesEntity>
  ) { }

  createProductType(productType: CreateProductTypeDto) {
    const newProductType = this.productTypesRepository.create(productType)
    return this.productTypesRepository.save(newProductType)
  }

  getProductTypes() {
    return this.productTypesRepository.find()
  }

  getProductType() {

  }

  updateProductType() {

  }
}
