import { ReportType } from "src/data";
import { ReportResponseDto } from "src/dtos/report.dto";
interface Report {
    source: string;
    amount: number;
}
interface UpdateReport {
    source?: string;
    amount?: number;
}
export declare class ReportService {
    getAllReports(type: ReportType): ReportResponseDto[];
    getReportById(type: ReportType, id: string): ReportResponseDto;
    createReport(type: ReportType, { amount, source }: Report): ReportResponseDto;
    updateReport(type: ReportType, id: string, body: UpdateReport): ReportResponseDto;
    deleteReport(id: string): string;
}
export {};
