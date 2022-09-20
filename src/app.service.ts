// //we need another decorator called "Injectable"
// import { Injectable, Param, Body} from "@nestjs/common";

// for our new empty class (not sure why we even keep it?):
import { Injectable } from "@nestjs/common";

// import { ReportType, data } from "src/data"
// import { v4 as uuid } from "uuid";
// import { ReportResponseDto } from "./dtos/report.dto";
// let getReportType = (input: string): string => {
//   return input === "income" ? ReportType.INCOME : ReportType.EXPENSE;//aka:
//   // if(input === "income") return ReportType.INCOME;
//   // else return ReportType.EXPENSE;
// }

// interface Report {
//   source: string,
//   amount: number
// };

// interface UpdateReport {
//   source?: string,
//   amount?: number
// }

// // This is where all the logic will live;
// // all entities in NestJS are classes so it will be class;

@Injectable()
export class AppService {}


// @Injectable()
// export class AppService {
//   //we appended a map b/c data.report.filter((report) => report.type === type) returns an array
//   getAllReports(type: ReportType): ReportResponseDto[] {
//     // console.log("app service report filter:" + typeof (data.report.filter((report) => report.type === type)));
//     return data.report.filter((report) => report.type === type).
//       map((report) => new ReportResponseDto(report));
//   }//getAllReports

//   getReportById(type: ReportType, id: string): ReportResponseDto {
//     //put the report we filter for into a const
//     const report = data.report.filter((report) => report.type === type).find(report => report.id === id);
//     //if we don't find a report return early
//     if (!report) return;
//     return new ReportResponseDto(report);
//   }

//   createReport(type: ReportType, { amount, source }: Report): ReportResponseDto {
//     const newReport = {
//       id: uuid(),
//       source,
//       amount,
//       created_at: new Date(),
//       updated_at: new Date(),
//       //Now we get type passed to us from the call in controller
//       type
//     }
//     data.report.push(newReport)
//     return new ReportResponseDto(newReport);
//   }

//   updateReport(type: ReportType, id: string, body: UpdateReport): ReportResponseDto {
//     // const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
//     const reportToUpdate = data.report.filter((report) => report.type === type).find(report => report.id === id);
//     if (!reportToUpdate) return;
//     const reportIndex = data.report.findIndex((report) => report.id === reportToUpdate.id);
//     data.report[reportIndex] = {
//       ...data.report[reportIndex],
//       ...body,
//       updated_at: new Date()
//     }
//     return new ReportResponseDto(data.report[reportIndex]);
//   }

//   deleteReport(id: string) {
//     const reportIndex = data.report.findIndex(report => report.id === id);
//     if (reportIndex === -1) return;
//     data.report.splice(reportIndex, 1);
//     //not sure if this message is reachable?  with the @HttpCode(204)
//     return `Deleted a report`;
//   }


// }// AppService class





// // the default code was:
// // import { Injectable } from '@nestjs/common';

// // @Injectable()
// // export class AppService {
// //   getHello(): string {
// //     return 'Hello World!';
// //   }
// // }