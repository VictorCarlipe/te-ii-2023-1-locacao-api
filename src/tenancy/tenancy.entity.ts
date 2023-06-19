import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { ObjectiveEnum } from "./Objective.enum";
import { LocalEntity } from 'src/local/local.entity';
import { StudentEntity } from 'src/student/student.entity';

@Entity({name: 'tenancys'})
export class TenancyEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type:'date', name:'initial_date', nullable:false})
    initialDate: Date;

    @Column({type:'date', name:'final_date', nullable:false})
    finalDate: Date;   
    
    @Column({type:'enum', enum:ObjectiveEnum, default: ObjectiveEnum.Atendimento, nullable:true})
    objective:ObjectiveEnum;

    @Column({type:'varchar', nullable:true})
    description:string;

    @ManyToOne(
        () => LocalEntity,
        (local) => local.tenancys,
        {eager:true}
    )
    @JoinColumn({
        name: 'local_id',
        foreignKeyConstraintName: 'local_id',
        referencedColumnName:'id'
    })
    local: LocalEntity;

    @ManyToOne(
        () => StudentEntity,
        (student) => student.tenancys,
        {eager:true}
    )
    @JoinColumn({
        name: 'student_id',
        foreignKeyConstraintName:'student_id',
        referencedColumnName:'id'
    })
    student: StudentEntity;
}