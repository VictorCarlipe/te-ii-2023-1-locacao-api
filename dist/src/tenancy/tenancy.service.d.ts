import { TenancyEntity } from "./tenancy.entity";
import { Repository } from "typeorm";
import { TenancyDto } from "./tenancy.dto";
export declare class TenancyService {
    private tenancyRepository;
    minute: number;
    hour: number;
    day: number;
    year: number;
    constructor(tenancyRepository: Repository<TenancyEntity>);
    findAll(): Promise<TenancyEntity[]>;
    findById(id: string): Promise<TenancyEntity>;
    remove(id: string): Promise<{
        id: string;
        initialDate: Date;
        finalDate: Date;
        objective: import("./Objective.enum").ObjectiveEnum;
        description: string;
        local: import("../local/local.entity").LocalEntity;
        student: import("../student/student.entity").StudentEntity;
    }>;
    create(dto: TenancyDto): Promise<TenancyEntity>;
    update(dto: TenancyDto): Promise<TenancyDto & TenancyEntity>;
    validate(dto: TenancyDto): void;
    validInitialDate(initialDate: Date): boolean;
    validFinalDate(finalDate: Date, initialDate: Date): boolean;
}
