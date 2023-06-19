import { TypeOrmModule } from "@nestjs/typeorm";
import { TenancyEntity } from "./tenancy.entity";
import { TenancysController } from "./tenancy.controller";
import { TenancyService } from "./tenancy.service";
import { Module } from "@nestjs/common";

@Module({
    imports:[
        TypeOrmModule.forFeature([TenancyEntity])
    ],
    controllers:[TenancysController],
    providers:[TenancyService]
})

export class TenancyModule{}