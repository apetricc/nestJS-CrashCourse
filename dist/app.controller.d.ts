import { CreateReportDto, UpdateReportDto, ReportResponseDto } from "src/dtos/report.dto";
import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllReports(type: string): ReportResponseDto[];
    getReportById(type: string, id: string): ReportResponseDto;
    createReport({ amount, source }: CreateReportDto, type: string): ReportResponseDto;
    myUpdateReport({ amount, source }: {
        amount: number;
        source: string;
    }, id: string, type: string): string;
    updateReport(body: UpdateReportDto, id: string, type: string): ReportResponseDto;
    myDeleteReport(id: string, type: string): string;
    deleteReport(id: string): string;
    getHello(): string;
}
