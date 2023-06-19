import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LocalEntity } from "./local.entity";
import { Repository } from "typeorm";
import { LocalDto } from "./local.dto";

@Injectable() export class LocalService{
    constructor(
        @InjectRepository(LocalEntity)
        private localRepository: Repository<LocalEntity>
    ){}

    findAll():Promise<LocalEntity[]>{
        return this.localRepository.find();
    }

    async findById(id: string): Promise<LocalEntity>{
        const findOne = await this.localRepository.findOne({where:{id}});
        if(findOne == null){
            throw new NotFoundException(`O Local, cujo o identificador é ${id}, não foi encontrado`);
        }
        return findOne;
    }

    async remove(id:string){
        const findById = await this.findById(id);
        await this.localRepository.remove(findById);
        return {...findById, id}
    }

    async create(dto: LocalDto){
        this.validate(dto);
        const newLocal = this.localRepository.create(dto);
        return this.localRepository.save(newLocal);
    }

    async update (dto: LocalDto){
        await this.findById(dto.id);
        this.validate(dto);
        return this.localRepository.save(dto);
    }

    validate(dto: LocalDto){
        if (this.validMinLotation(dto.lotation)){
            throw new BadRequestException(
                'A lotação minima para os locais da instituição é de 10',
              );
        }
        if (this.validAttributes(dto.attributes)){
            throw new BadRequestException(
                'Houve um conflito de atributos. O mesmo local não pode possuir quadro tradicional e quadro branco',
              );
        }
        if (this.validLength(dto.name)){
            throw new BadRequestException(
                'O nome do local deve possuir no mínimo 5 caracteres',
              );
        }
    }

    validMinLotation(lotation:number){
        return lotation < 10 ? true : false
    }

    validAttributes(attribute:string){
        const validLT = attribute.match('LT');
        const validQB = attribute.match('QB');

        const valid = validLT && validQB;
        return valid;
    }

    validLength(name:string){
        return name.length < 5 ? true : false;
    }

    async dashQttUnity(){
        const qb = this.localRepository.createQueryBuilder("locals");
        qb.select("locals.unity, count(*)")
            .groupBy("locals.unity");
        return await qb.getRawMany();
            
    }    
}