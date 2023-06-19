import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { ObjectiveEnum } from "./Objective.enum";
import { LocalDto } from "src/local/local.dto";
import { Type } from "class-transformer";
import { StudentDto } from "src/student/student.dto";

export class TenancyDto{
    @IsUUID()
    @IsOptional()
    id?:string;

    @IsDateString()
    @IsNotEmpty()
    initialDate: Date;

    @IsDateString()
    @IsNotEmpty()
    finalDate: Date;

    @IsEnum(ObjectiveEnum)
    @IsOptional()
    objective?: ObjectiveEnum;

    @IsString()
    @IsOptional()
    description?: string;

    @IsOptional()
    @Type(() => LocalDto)
    @ValidateNested()
    local?: LocalDto;

    @IsOptional()
    @Type(() => StudentDto)
    @ValidateNested()
    student?: StudentDto;
}