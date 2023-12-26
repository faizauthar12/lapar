import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customersService: CustomerService) {}

  @Get()
  async findAll(@Res() response: Response) {
    const customers = await this.customersService.findAll();

    response.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Customers have been retrieved successfully',
      data: customers,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    const customer = await this.customersService.findOne(+id);
    response.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Customer has been retrieved successfully',
      data: customer,
    });
  }

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
    @Res() response: Response,
  ) {
    const customer = await this.customersService.create(createCustomerDto);

    response.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      message: 'Customer has been created successfully',
      data: customer,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: CreateCustomerDto,
    @Res() response: Response,
  ) {
    const customer = await this.customersService.update(+id, updateCustomerDto);

    response.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Customer has been updated successfully',
      data: customer,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    const deletedStatus = await this.customersService.remove(+id);

    if (!deletedStatus) {
      response.status(HttpStatus.NOT_FOUND).json({
        status: HttpStatus.NOT_FOUND,
        message: 'Customer has not been deleted successfully',
      });
    } else {
      response.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'Customer has been deleted successfully',
      });
    }
  }
}
