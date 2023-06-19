import{
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm'
import { UnityEnum } from './unity.enum';
import { TenancyEntity } from 'src/tenancy/tenancy.entity';

@Entity({ name: 'locals' })
export class LocalEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', nullable:false})
    name:string;

    @Column({type:'enum', enum:UnityEnum, nullable:true})
    unity:UnityEnum;

    @Column({type:'integer', nullable:false})
    lotation: number;

    @Column({type:'varchar', nullable:false})
    attributes: string;

    @OneToMany(() => TenancyEntity, (tenancy) => tenancy.local)
    tenancys: TenancyEntity[];
}