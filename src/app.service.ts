//we need another decorator called "Injectable"
import { Injectable, Param, Body } from "@nestjs/common";

import { ReportType, data } from "src/data"
import { v4 as uuid } from "uuid";
let getReportType = (input: string): string => {
  return input === "income" ? ReportType.INCOME : ReportType.EXPENSE;//aka:
  // if(input === "income") return ReportType.INCOME;
  // else return ReportType.EXPENSE;
}

// This is where all the logic will live;
// all entities in NestJS are classes so it will be class;

@Injectable()
export class AppService {


  getAllReports(type: ReportType) {
    return data.report.filter((report) => report.type === type);
  }//getAllReports

  getReportById(@Param('type') type: string, @Param('id') id: string){
    return data.report.filter((report) => report.type === type).find(report => report.id === id);
  }

  createReport(@Body() { amount, source }: { amount: number; source: string; }, @Param('type') type: string) {
    // console.log({ body });
    const newReport = {
      id: uuid(),
      // source: body.source
      // or simplify to--> source: source
      // or even simpler to:
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      //type we have to extract from the params using @Param decorator (at 1:18:35)
      type: type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    }
    data.report.push(newReport)
    return newReport;
  }

}// AppService class





// the default code was:
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }