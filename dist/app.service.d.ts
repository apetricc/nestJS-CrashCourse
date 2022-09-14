import { ReportType } from "src/data";
interface Report {
    source: string;
    amount: number;
}
interface UpdateReport {
    source?: string;
    amount?: number;
}
export declare class AppService {
    getAllReports(type: ReportType): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[];
    getReportById(type: ReportType, id: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    createReport(type: ReportType, { amount, source }: Report): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    updateReport(type: ReportType, id: string, body: UpdateReport): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    deleteReport(id: string): string;
}
export {};
