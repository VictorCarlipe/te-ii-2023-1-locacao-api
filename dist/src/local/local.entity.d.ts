import { UnityEnum } from './unity.enum';
import { TenancyEntity } from 'src/tenancy/tenancy.entity';
export declare class LocalEntity {
    id: string;
    name: string;
    unity: UnityEnum;
    lotation: number;
    attributes: string;
    tenancys: TenancyEntity[];
}
