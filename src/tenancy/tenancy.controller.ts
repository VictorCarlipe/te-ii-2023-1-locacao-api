import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TenancyService } from "./tenancy.service";
import { TenancyEntity } from "./tenancy.entity";
import { TenancyDto } from "./tenancy.dto";

@Controller('tenancys') export class TenancysController {
    constructor (private tenancyService: TenancyService){}

    @Get()
    findAll():Promise<TenancyEntity[]>{
        return this.tenancyService.findAll();
    }

    ///*
    @Get(':id')
    async findById(@Param('id') id: string):Promise<TenancyEntity>{
        return await this.tenancyService.findById(id);
    }
    //*/
    
    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.tenancyService.remove(id);
    }

    @Post()
    create(@Body() dto: TenancyDto){
        return this.tenancyService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() dto: TenancyDto){
        return this.tenancyService.update({...dto, id});
    }
}

