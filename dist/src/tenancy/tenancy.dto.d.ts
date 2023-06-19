import { ObjectiveEnum } from "./Objective.enum";
import { LocalDto } from "src/local/local.dto";
import { StudentDto } from "src/student/student.dto";
export declare class TenancyDto {
    id?: string;
    initialDate: Date;
    finalDate: Date;
    objective?: ObjectiveEnum;
    description?: string;
    local?: LocalDto;
    student?: StudentDto;
}
