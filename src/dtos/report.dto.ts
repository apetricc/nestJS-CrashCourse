import {IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString} from "class-validator"
//when we npm installed "class-validator" we also installed "class-transformer" which has some more useful decorators
// that will help us with the response DTO
import { Exclude, Expose } from "class-transformer"


import { ReportType } from "src/data";

//how we validate is by first defining this class, and then exporting it
export class CreateReportDto {
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}


export class UpdateReportDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    amount: number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    source: string;
}

//our response DTO:
// exclude is going to allow to exclude certain properties from our object
export class ReportResponseDto {
    id: string;
    source: string;
    amount: number;
    //this creates the field "createdAt" but to only have this one, we need to exclude 'created_at'
    @Expose({name: "createdAt"})
    transformCreatedAt() {
        return this.created_at;
    }
    @Exclude()
    created_at: Date;

    @Exclude()
    updated_at: Date;
    type: ReportType;




    //what does this mean? It can accept anything that has any of the fields that belong in this object
    constructor(stuff: Partial<ReportResponseDto>) {
        Object.assign(this, stuff);
    }
}



