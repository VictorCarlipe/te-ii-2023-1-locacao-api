import {
     IsDateString,
     IsEnum,
     IsNotEmpty,
     IsOptional,
     IsString,
     IsUUID,
     IsInt,
     IsEmail
 } from 'class-validator';

import { CourseEnum } from "./course.enum";
import { GenderEnum } from "./gender.enum";
import { PhaseEnum } from "./phase.enum";

export class StudentDto{
    @IsUUID()
    @IsOptional()
    id?: string;

    @IsInt()
    @IsNotEmpty()
    registration: number;

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsDateString()
    @IsOptional()
    datebirth?: Date | string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsInt()
    @IsOptional()
    phone?: number;

    @IsEnum(CourseEnum)
    @IsOptional()
    course?:CourseEnum;

    @IsEnum(PhaseEnum)
    @IsOptional()
    phase?: PhaseEnum;

    @IsEnum(GenderEnum)
    @IsOptional()
    gender?:GenderEnum;
}