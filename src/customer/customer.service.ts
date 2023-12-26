import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerSchema } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CreateLocationDto } from 'src/location/dto/create-location.dto';
import { LocationSchema } from 'src/location/location.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerSchema)
    private customersRepository: Repository<CustomerSchema>,
  ) {}

  async create(
    createCustomerDto: CreateCustomerDto,
    createLocationDto: CreateLocationDto,
  ): Promise<CustomerSchema> {
    const location = new LocationSchema();
    location.name = createLocationDto.name;
    location.address = createLocationDto.address;
    location.latitude = createLocationDto.latitude;
    location.longitude = createLocationDto.longitude;

    const newCustomer = new CustomerSchema();
    newCustomer.name = createCustomerDto.name;
    newCustomer.email = createCustomerDto.email;
    newCustomer.phone_number = createCustomerDto.phone_number;
    newCustomer.location = location;

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
