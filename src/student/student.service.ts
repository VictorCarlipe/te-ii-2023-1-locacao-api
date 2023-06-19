import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentEntity } from "./student.entity";
import { Repository } from 'typeorm'
import { StudentDto } from "./student.dto";
@Injectable() export class StudentService{
    constructor(
        @InjectRepository(StudentEntity) 
        private studentRepository: Repository<StudentEntity>,
    ){}

    findAll():Promise<StudentEntity[]>{
        return this.studentRepository.find();
    }

    async findById(id: string): Promise<StudentEntity>{
        const findOne = await this.studentRepository.findOne({where:{ id }});
        if (findOne == null){
            throw new NotFoundException(`O estudante, cujo o identifcador é ${id}, não foi encontrado`);
        }
        return findOne;
    }

    async remove(id: string){
        const findById = await this.findById(id);
        await this.studentRepository.remove(findById);
        return {...findById, id};
    }

    async create(dto: StudentDto){
        this.validate(dto);
        const newStudent = this.studentRepository.create(dto);
        return this.studentRepository.save(newStudent);
    }

    async update (dto: StudentDto){
        await this.findById(dto.id);
        this.validate(dto);
        return this.studentRepository.save(dto);
    }

    validate(dto: StudentDto){
        if (this.validMinAge(dto.datebirth.toString())){
            throw new BadRequestException(
                'O Aluno(a) a ser cadastrado deve possuir mais de 16 anos',
              );
        }
        if (this.validMaxAge(dto.datebirth.toString())){
            throw new BadRequestException(
                'O Aluno(a) a ser cadastrado deve possuir menos de 76 anos',
              );
        } 
        if (this.validLenght(dto.name)){
            throw new BadRequestException(
                'Ao todo o nome e sobrenome do aluno(a) deve possuir mais de 5 letras',
              );
        }                
        //if (this.validRegistration(dto.registration, dto.id)){
        //    throw new BadRequestException(
        //        'Matricula duplicada! Já existe este mesmo registro de matricula no sistema.'
        //    );
        //}
    }

    validMinAge(birthdate: string){
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const year = day * 365;
        
        const value =  new Date(birthdate)
        const now = new Date(Date.now())
        const diff = (now.getTime() / year - value.getTime() / year)
        if (diff < 16){
          return true;
        }else{
            return false;
        }
        
    }   

    validMaxAge(birthdate: string){
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const year = day * 365;
        
        const value =  new Date(birthdate)
        const now = new Date(Date.now())
        const diff = (now.getTime() / year - value.getTime() / year)
        if (diff > 76){
          return true;
        }else{
          return false;
        }
        
    }  

    validLenght(name: string){
        const validation = name.length < 5 ? true : false;
        return validation;
    }

    //async validRegistration(registration: number, id:string){
    //    const regOnDataBase = await dataSource
    //    .createQueryBuilder()
    //    .select("registration")
    //    .from(StudentEntity, "students")
    //    .where("students.registration = :reg AND students.id <> ident", { reg: registration, ident:id })
    //    .getOne()
    //
    //    if(regOnDataBase){
    //        return true;
    //    }else{
    //        return false;
    //    }
    //}

    async dashQttByCourse(){
        const qb = this.studentRepository.createQueryBuilder("students");
        qb.select("students.Course, count(*)")
            .groupBy("students.course");
        return await qb.getRawMany();
            
    }

    async dashQttByPhase(){
        const qb = this.studentRepository.createQueryBuilder("students");
        qb.select("students.phase, count(*)")
            .groupBy("students.phase");
        return await qb.getRawMany();
            
    }

    async dashQttByGender(){
        const qb = this.studentRepository.createQueryBuilder("students");
        qb.select("students.gender, count(*)")
            .groupBy("students.gender");
        return await qb.getRawMany();
            
    }
}