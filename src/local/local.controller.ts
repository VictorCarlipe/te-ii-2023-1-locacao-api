import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LocalEntity } from "./local.entity";
import { LocalService } from "./local.service";
import { LocalDto } from "./local.dto";

@Controller('locals') export class LocalContoller{
    constructor(private localService: LocalService){}

    @Get()
    findAll():Promise<LocalEntity[]>{
        return this.localService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id:string):Promise<LocalEntity>{
        return await this.localService.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.localService.remove(id);
    }

    @Post()
    create(@Body() dto:LocalDto){
        return this.localService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() dto:LocalDto){
        return this.localService.update({...dto, id})
    }


    @Get('dashQttUnity')
    async dashQttUnity(){
        return this.localService.dashQttUnity();
    }
}