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
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { MenuSchema } from './menu.entity';

@ApiTags('menu')
@Controller('menu')
export class MenuController {
  constructor(private menusService: MenuService) {}

  @Get()
  @ApiOperation({ summary: 'Get Menus' })
  @ApiResponse({
    status: 200,
    description: 'Found Menus',
    type: [MenuSchema],
  })
  async findAll(@Res() response: Response) {
    const menus = await this.menusService.findAll();

    response.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Menus have been retrieved successfully',
      data: menus,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Menu' })
  @ApiResponse({
    status: 200,
    description: 'Found Menu',
    type: MenuSchema,
  })
  async findOne(@Param('id') id: string, @Res() response: Response) {
    const menu = await this.menusService.findOne(+id);
    response.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Menu has been retrieved successfully',
      data: menu,
    });
  }

  @Post()
  @ApiOperation({ summary: 'Create menu' })
  async create(
    @Body() createMenuDto: CreateMenuDto,
    @Res() response: Response,
  ) {
    const menu = await this.menusService.create(createMenuDto);

    response.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      message: 'Menu has been created successfully',
      data: menu,
    });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update menu' })
  async update(
    @Param('id') id: string,
    @Body() updateMenuDto: CreateMenuDto,
    @Res() response: Response,
  ) {
    const menu = await this.menusService.update(+id, updateMenuDto);

    response.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Menu has been updated successfully',
      data: menu,
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete menu' })
  async remove(@Param('id') id: string, @Res() response: Response) {
    const menu = await this.menusService.remove(+id);

    if (!menu) {
      response.status(HttpStatus.NOT_FOUND).json({
        status: HttpStatus.NOT_FOUND,
        message: 'Menu does not exist!',
      });
    } else {
      response.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'Menu has been deleted successfully',
      });
    }
  }
}
