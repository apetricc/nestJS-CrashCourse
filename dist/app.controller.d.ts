import { ReportType } from "src/data";
import { CreateReportDto, UpdateReportDto } from "src/dtos/report.dto";
import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllReports(type: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[];
    getReportById(type: string, id: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    createReport({ amount, source }: CreateReportDto, type: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    myUpdateReport({ amount, source }: {
        amount: number;
        source: string;
    }, id: string, type: string): string;
    updateReport(body: UpdateReportDto, id: string, type: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    myDeleteReport(id: string, type: string): string;
    deleteReport(id: string): string;
    getHello(): string;
}
