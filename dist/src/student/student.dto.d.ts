import { CourseEnum } from "./course.enum";
import { GenderEnum } from "./gender.enum";
import { PhaseEnum } from "./phase.enum";
export declare class StudentDto {
    id?: string;
    registration: number;
    name: string;
    datebirth?: Date | string;
    email?: string;
    phone?: number;
    course?: CourseEnum;
    phase?: PhaseEnum;
    gender?: GenderEnum;
}
