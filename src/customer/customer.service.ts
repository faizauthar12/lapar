import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerSchema } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerSchema)
    private customersRepository: Repository<CustomerSchema>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerSchema> {
    const newCustomer = this.customersRepository.create(createCustomerDto);
    return await this.customersRepository.save(newCustomer);
  }

  async findAll(): Promise<CustomerSchema[]> {
    return await this.customersRepository.find({ relations: ['location'] });
  }

  async findOne(id: number): Promise<CustomerSchema> {
    const customer = await this.customersRepository.findOne({
      where: { id: id },
      relations: ['location'],
    });

    if (!customer) {
      throw new NotFoundException('Location does not exist!');
    } else {
      return customer;
    }
  }

  async update(
    id: number,
    updateCustomerDto: CreateCustomerDto,
  ): Promise<CustomerSchema> {
    const customer = await this.findOne(id);
    Object.assign(customer, updateCustomerDto);

    return this.customersRepository.save(customer);
  }

  async remove(id: number): Promise<CustomerSchema> {
    const customer = await this.findOne(id);
    return this.customersRepository.remove(customer);
  }
}
