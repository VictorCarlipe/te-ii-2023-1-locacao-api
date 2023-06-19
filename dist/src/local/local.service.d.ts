import { LocalEntity } from "./local.entity";
import { Repository } from "typeorm";
import { LocalDto } from "./local.dto";
export declare class LocalService {
    private localRepository;
    constructor(localRepository: Repository<LocalEntity>);
    findAll(): Promise<LocalEntity[]>;
    findById(id: string): Promise<LocalEntity>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        unity: import("./unity.enum").UnityEnum;
        lotation: number;
        attributes: string;
    }>;
    create(dto: LocalDto): Promise<LocalEntity>;
    update(dto: LocalDto): Promise<LocalDto & LocalEntity>;
    validate(dto: LocalDto): void;
    validMinLotation(lotation: number): boolean;
    validAttributes(attribute: string): RegExpMatchArray;
    validLength(name: string): boolean;
    dashQttUnity(): Promise<any[]>;
}
