import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateLocationDto } from './dto/create-location.dto';
import { LocationService } from './location.service';
import { ILocation } from './interfaces/location.interface';

@Controller('location')
export class LocationController {
  constructor(private locationsService: LocationService) {}

  @Get()
  findAll(): ILocation[] {
    return this.locationsService.findAll();
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a #${id} location';
  }

  @Post()
  create(
    @Body() createLocationDto: CreateLocationDto,
    @Res() response: Response,
  ) {
    const location = this.locationsService.create(createLocationDto);

    response.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      message: 'Location has been created successfully',
      data: location,
    });
  }
}
