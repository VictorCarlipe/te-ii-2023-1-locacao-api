import { StudentEntity } from "./student.entity";
import { Repository } from 'typeorm';
import { StudentDto } from "./student.dto";
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<StudentEntity>);
    findAll(): Promise<StudentEntity[]>;
    findById(id: string): Promise<StudentEntity>;
    remove(id: string): Promise<{
        id: string;
        registration: number;
        name: string;
        datebirth: Date;
        email: string;
        phone: string;
        course: import("./course.enum").CourseEnum;
        phase: import("./phase.enum").PhaseEnum;
        gender: import("./gender.enum").GenderEnum;
    }>;
    create(dto: StudentDto): Promise<StudentEntity>;
    update(dto: StudentDto): Promise<StudentDto & StudentEntity>;
    validate(dto: StudentDto): void;
    validMinAge(birthdate: string): boolean;
    validMaxAge(birthdate: string): boolean;
    validLenght(name: string): boolean;
    dashQttByCourse(): Promise<any[]>;
    dashQttByPhase(): Promise<any[]>;
    dashQttByGender(): Promise<any[]>;
}
