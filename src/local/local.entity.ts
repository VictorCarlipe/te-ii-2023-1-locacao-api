import{
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm'
import { UnityEnum } from './unity.enum';

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
}