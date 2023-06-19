import { CourseEnum } from "./course.enum";
import { PhaseEnum } from "./phase.enum";
import { GenderEnum } from './gender.enum';
import { TenancyEntity } from 'src/tenancy/tenancy.entity';
export declare class StudentEntity {
    id: string;
    registration: number;
    name: string;
    datebirth: Date;
    email: string;
    phone: string;
    course: CourseEnum;
    phase: PhaseEnum;
    gender: GenderEnum;
    tenancys: TenancyEntity[];
}
