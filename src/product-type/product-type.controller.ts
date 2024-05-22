import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductTypeService } from './product-type.service';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
// import { UpdateProductTypeDto } from './dto/update-product-type.dto';

@Controller('product-types')
export class ProductTypeController {
  constructor(private productTypeService: ProductTypeService) { }

  @Post()
  createProductType(@Body() productType: CreateProductTypeDto) {
    return this.productTypeService.createProductType(productType)
  }

  @Get()
  getProductTypes() {
    return this.productTypeService.getProductTypes()
  }

}
