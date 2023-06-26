import { LocalEntity } from "./local.entity";
import { LocalService } from "./local.service";
import { LocalDto } from "./local.dto";
export declare class LocalContoller {
    private localService;
    constructor(localService: LocalService);
    findAll(): Promise<LocalEntity[]>;
    dashQttUnity(): Promise<any[]>;
    findById(id: string): Promise<LocalEntity>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        unity: import("./unity.enum").UnityEnum;
        lotation: number;
        attributes: string;
        tenancys: import("../tenancy/tenancy.entity").TenancyEntity[];
    }>;
    create(dto: LocalDto): Promise<LocalEntity>;
    update(id: string, dto: LocalDto): Promise<LocalDto & LocalEntity>;
}
