import { ReportType } from "src/data";
export declare class AppService {
    getAllReports(type: ReportType): {
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
    createReport({ amount, source }: {
        amount: number;
        source: string;
    }, type: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
}
