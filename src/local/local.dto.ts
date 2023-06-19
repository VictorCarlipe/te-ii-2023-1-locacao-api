import { 
    IsEnum, 
    IsInt, 
    IsNotEmpty, 
    IsOptional, 
    IsString, 
    IsUUID 
} from "class-validator";
import { UnityEnum } from "./unity.enum";

export class LocalDto{
    @IsUUID()
    @IsOptional()
    id?:string;

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsInt()
    @IsNotEmpty()
    lotation:number;

    @IsEnum(UnityEnum)
    @IsOptional()
    unity?:UnityEnum;

    @IsString()
    @IsNotEmpty()
    attributes:string;
}