import { Module } from '@nestjs/common'
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocalEntity } from "./local.entity";
import { LocalContoller } from "./local.controller";
import { LocalService } from "./local.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([LocalEntity])
    ],
    controllers:[LocalContoller],
    providers:[LocalService]
})

export class LocalModule{}