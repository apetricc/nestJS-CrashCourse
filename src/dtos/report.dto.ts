import {IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString} from "class-validator"

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
