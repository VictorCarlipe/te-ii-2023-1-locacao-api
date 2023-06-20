import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StudentService } from "./student.service";
import { StudentDto } from "./student.dto";
import { StudentEntity } from "./student.entity";

@Controller('students') export class StudentController {
    constructor (private studentService: StudentService){}

    @Get('/dashQttByCourse')
    async dashQttByCourse(){
        return this.studentService.dashQttByCourse();
    }
    @Get('/dashQttByPhase')
    async dashQttByPhase(){
        return this.studentService.dashQttByPhase();
    }
    @Get('/dashQttByGender')
    async dashQttByGender(){
        return this.studentService.dashQttByGender();
    }

    @Get()
    findAll():Promise<StudentEntity[]>{
        return this.studentService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: string):Promise<StudentEntity>{
        return await this.studentService.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.studentService.remove(id);
    }

    @Post()
    create(@Body() dto: StudentDto){
        return this.studentService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() dto: StudentDto){
        return this.studentService.update({...dto, id});
    }
}