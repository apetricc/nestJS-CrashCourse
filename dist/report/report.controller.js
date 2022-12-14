"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const data_1 = require("../data");
const report_dto_1 = require("../dtos/report.dto");
let myFunction = (a, b) => a / b;
var hello = (val) => "Hello " + val;
function getReportType1(input) {
    return input === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE;
}
let logReportType = (input) => {
    let output = input === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE;
    return console.log(`The report type is given as: ${input}, and the value assigned was: ${output}`);
};
let getReportType = (input) => {
    return input === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE;
};
const report_service_1 = require("./report.service");
let ReportController = class ReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    getAllReports(type) {
        const reportType = type === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE;
        return this.reportService.getAllReports(reportType);
    }
    getReportById(type, id) {
        console.log(id, typeof (id));
        const reportType = type === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE;
        return this.reportService.getReportById(reportType, id);
    }
    createReport({ amount, source }, type) {
        const reportType = type === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE;
        return this.reportService.createReport(reportType, { source, amount });
    }
    myUpdateReport({ amount, source }, id, type) {
        const newReport = {
            id: id,
            source,
            amount,
            created_at: new Date(),
            updated_at: new Date(),
            type: type === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE
        };
        const reportType = type === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE;
        console.log(`This is what I get when I try to filter id and THEN type, I get a report *I think*: ` + JSON.stringify(data_1.data.report.filter((report) => report.type === type).find(report => report.id === id)));
        let updateReport = (data_1.data.report.filter((report) => report.type === type).find(report => report.id === id));
        updateReport.amount = amount === NaN ? amount : updateReport.amount;
        updateReport.source = source === "" ? source : updateReport.source;
        updateReport.updated_at = new Date();
        return `updating report ${id};  amount to ${amount}, and source to ${source}.  Hopefully updated object from database: ` + JSON.stringify(data_1.data.report.filter((report) => report.type === type).find(report => report.id === id));
    }
    updateReport(body, id, type) {
        const reportType = type === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE;
        return this.reportService.updateReport(reportType, id, body);
    }
    myDeleteReport(id, type) {
        const reportType = type === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE;
        const reportToUpdate = data_1.data.report.filter((report) => report.type === reportType).find(report => report.id === id);
        if (!reportToUpdate)
            return;
        const reportIndex = data_1.data.report.findIndex((report) => report.id === reportToUpdate.id);
        data_1.data.report.splice(reportIndex);
        return `deleted ${type} report: ${id}`;
    }
    deleteReport(id) {
        return this.reportService.deleteReport(id);
    }
    getHello() {
        return "Hello!";
    }
};
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Param)('type', new common_1.ParseEnumPipe(data_1.ReportType))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], ReportController.prototype, "getAllReports", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('type', new common_1.ParseEnumPipe(data_1.ReportType))),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", report_dto_1.ReportResponseDto)
], ReportController.prototype, "getReportById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('type', new common_1.ParseEnumPipe(data_1.ReportType))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_dto_1.CreateReportDto, String]),
    __metadata("design:returntype", report_dto_1.ReportResponseDto)
], ReportController.prototype, "createReport", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Param)('type', new common_1.ParseEnumPipe(data_1.ReportType))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "myUpdateReport", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Param)('type', new common_1.ParseEnumPipe(data_1.ReportType))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_dto_1.UpdateReportDto, String, String]),
    __metadata("design:returntype", report_dto_1.ReportResponseDto)
], ReportController.prototype, "updateReport", null);
__decorate([
    (0, common_1.Delete)('/myDelete/' + ':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "myDeleteReport", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "deleteReport", null);
__decorate([
    (0, common_1.Get)('hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getHello", null);
ReportController = __decorate([
    (0, common_1.Controller)('report/:type'),
    __metadata("design:paramtypes", [report_service_1.ReportService])
], ReportController);
exports.ReportController = ReportController;
//# sourceMappingURL=report.controller.js.map