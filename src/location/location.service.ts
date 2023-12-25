import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationSchema } from './location.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationSchema)
    private locationsRepository: Repository<LocationSchema>,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<LocationSchema> {
    const newLocation = this.locationsRepository.create(createLocationDto);
    return await this.locationsRepository.save(newLocation);
  }

  async findAll(): Promise<LocationSchema[]> {
    return await this.locationsRepository.find();
  }

  async findOne(id: number): Promise<LocationSchema> {
    const location = await this.locationsRepository.findOne({
      where: { id: id },
    });

    if (!location) {
      throw new NotFoundException('Location does not exist!');
    } else {
      return location;
    }
  }

  async update(
    id: number,
    updateLocationDto: UpdateLocationDto,
  ): Promise<LocationSchema> {
    const location = await this.findOne(id);
    Object.assign(location, updateLocationDto);

    return this.locationsRepository.save(location);
  }

  async remove(id: number): Promise<LocationSchema> {
    const location = await this.findOne(id);
    return this.locationsRepository.remove(location);
  }
}
