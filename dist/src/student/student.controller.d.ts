import { StudentService } from "./student.service";
import { StudentDto } from "./student.dto";
import { StudentEntity } from "./student.entity";
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
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
    update(id: string, dto: StudentDto): Promise<StudentDto & StudentEntity>;
}
