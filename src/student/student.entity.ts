import{
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm'

import { CourseEnum } from "./course.enum";
import { PhaseEnum } from "./phase.enum";
import { GenderEnum } from './gender.enum';
import { TenancyEntity } from 'src/tenancy/tenancy.entity';

@Entity({ name: 'students' })
export class StudentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'integer', nullable:false})
    registration:number;

    @Column({type:'varchar', nullable:false})
    name:string;

    @Column({type:'date',  nullable:true})
    datebirth: Date;

    @Column({type:'varchar', nullable:true})
    email:string;

    @Column({type:'varchar', nullable:true})
    phone:string;

    @Column({type:'enum', enum:CourseEnum, default:CourseEnum.Administração, nullable:true})
    course: CourseEnum;

    @Column ({type:'enum', enum:PhaseEnum, default:PhaseEnum.Primeira, nullable:true})
    phase: PhaseEnum;

    @Column ({type:'enum', enum:GenderEnum, default:GenderEnum.Indefinido, nullable:true})
    gender: GenderEnum;

    @OneToMany(() => TenancyEntity, (tenancy) => tenancy.student)
    tenancys: TenancyEntity[];
}