import { Injectable } from '@nestjs/common';
import { ILocation } from './interfaces/location.interface';

@Injectable()
export class LocationService {
  private readonly locations: ILocation[] = [];

  create(location: ILocation) {
    this.locations.push(location);
    return location;
  }

  findAll(): ILocation[] {
    return this.locations;
  }
}
