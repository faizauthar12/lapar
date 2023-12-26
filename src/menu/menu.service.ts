import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuSchema } from './menu.entity';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuSchema)
    private menuRepository: Repository<MenuSchema>,
  ) {}

  async create(createMenuDto: CreateMenuDto): Promise<MenuSchema> {
    const newMenu = this.menuRepository.create(createMenuDto);
    return await this.menuRepository.save(newMenu);
  }

  async findAll(): Promise<MenuSchema[]> {
    return await this.menuRepository.find();
  }

  async findOne(id: number): Promise<MenuSchema> {
    const menu = await this.menuRepository.findOne({
      where: { id: id },
    });

    if (!menu) {
      throw new NotFoundException('Menu does not exist!');
    } else {
      return menu;
    }
  }

  async update(id: number, updateMenuDto: UpdateMenuDto): Promise<MenuSchema> {
    const menu = await this.findOne(id);
    Object.assign(menu, updateMenuDto);

    return this.menuRepository.save(menu);
  }

  async remove(id: number): Promise<MenuSchema> {
    const menu = await this.findOne(id);
    return this.menuRepository.remove(menu);
  }
}
