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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLocationDto } from './dto/create-location.dto';
import { LocationService } from './location.service';
import { LocationSchema } from './location.entity';
import { UpdateLocationDto } from './dto/update-location.dto';

@ApiTags('location')
@Controller('location')
export class LocationController {
  constructor(private locationsService: LocationService) {}

  @Get()
  @ApiOperation({ summary: 'Get locations' })
  @ApiResponse({
    status: 200,
    description: 'Found Location',
    type: [LocationSchema],
  })
  findAll(): Promise<LocationSchema[]> {
    return this.locationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a location' })
  @ApiResponse({
    status: 200,
    description: 'Found Location',
    type: LocationSchema,
  })
  findOne(@Param('id') id: string): Promise<LocationSchema> {
    return this.locationsService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create Location' })
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
  @ApiOperation({ summary: 'Update location' })
  update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ): Promise<LocationSchema> {
    return this.locationsService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete location' })
  remove(@Param('id') id: string): Promise<LocationSchema> {
    return this.locationsService.remove(+id);
  }
}
