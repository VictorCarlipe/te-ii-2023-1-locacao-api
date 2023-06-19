import { ObjectiveEnum } from "./Objective.enum";
import { LocalEntity } from 'src/local/local.entity';
import { StudentEntity } from 'src/student/student.entity';
export declare class TenancyEntity {
    id: string;
    initialDate: Date;
    finalDate: Date;
    objective: ObjectiveEnum;
    description: string;
    local: LocalEntity;
    student: StudentEntity;
}
