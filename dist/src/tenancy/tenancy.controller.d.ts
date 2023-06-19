import { TenancyService } from "./tenancy.service";
import { TenancyEntity } from "./tenancy.entity";
import { TenancyDto } from "./tenancy.dto";
export declare class TenancysController {
    private tenancyService;
    constructor(tenancyService: TenancyService);
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
    update(id: string, dto: TenancyDto): Promise<TenancyDto & TenancyEntity>;
}
