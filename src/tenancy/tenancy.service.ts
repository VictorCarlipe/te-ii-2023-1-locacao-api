import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TenancyEntity } from "./tenancy.entity";
import { Repository } from "typeorm";
import { TenancyDto } from "./tenancy.dto";

@Injectable()
export class TenancyService{
    minute = 1000 * 60;
    hour = this.minute * 60;
    day = this.hour * 24;
    year = this.day * 365;

    constructor(
        @InjectRepository(TenancyEntity)
        private tenancyRepository: Repository<TenancyEntity>,
    ){}

    findAll(): Promise<TenancyEntity[]>{
        return this.tenancyRepository.find();
    }

    async findById(id:string): Promise<TenancyEntity>{
        const findOne = await this.tenancyRepository.findOne({ where: {id} });
        if(findOne == null){
            throw new NotFoundException(
                `O registro de locação, cujo o identificador é ${id}, não foi encontrado`,
              );
        }
        return findOne;
    }

    async remove(id:string){
        const findById = await this.findById(id);
        await this.tenancyRepository.remove(findById);
        return {...findById, id};
    }

    async create(dto:TenancyDto){
        this.validate(dto);
        const newTenancy = this.tenancyRepository.create(dto);
        return this.tenancyRepository.save(newTenancy);
    }

    async update(dto: TenancyDto){
        await this.findById(dto.id);
        this.validate(dto);
        return this.tenancyRepository.save(dto);
    }

    validate(dto: TenancyDto){
        if(this.validInitialDate(dto.initialDate)){
            throw new BadRequestException(
                'Data inicial da locação é invalida',
              );
        };
        if(this.validFinalDate(dto.finalDate, dto.initialDate)){
            throw new BadRequestException(
                'Data final da locação é invalida',
              );
        }

    }

    validInitialDate(initialDate: Date){
        const inital = new Date(initialDate)
        const now = new Date(Date.now())
  
        if(inital.getTime() < (now.getTime() - 1*this.day)){
          return { invalidIntialDate : 'invaliDate'}
        }
        return null;
    }

    validFinalDate(finalDate: Date, initialDate:Date){
        const inDate = new Date(initialDate)
        const fiDate = new Date(finalDate)
  
        if(fiDate.getTime() < inDate.getTime()){
          return true
        }
        return false;        
    }
}