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
import { CreateLocationDto } from './dto/create-location.dto';
import { LocationService } from './location.service';
import { LocationSchema } from './location.entity';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('location')
export class LocationController {
  constructor(private locationsService: LocationService) {}

  @Get()
  findAll(): Promise<LocationSchema[]> {
    return this.locationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LocationSchema> {
    return this.locationsService.findOne(+id);
  }

  @Post()
  async create(
    @Body() createLocationDto: CreateLocationDto,
    @Res() response: Response,
  ) {
    const location = await this.locationsService.create(createLocationDto);

    response.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      message: 'Location has been created successfully',
      data: location,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ): Promise<LocationSchema> {
    return this.locationsService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<LocationSchema> {
    return this.locationsService.remove(+id);
  }
}
