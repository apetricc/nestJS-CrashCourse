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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const data_1 = require("./data");
const uuid_1 = require("uuid");
let getReportType = (input) => {
    return input === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE;
};
let AppService = class AppService {
    getAllReports(type) {
        return data_1.data.report.filter((report) => report.type === type);
    }
    getReportById(type, id) {
        return data_1.data.report.filter((report) => report.type === type).find(report => report.id === id);
    }
    createReport({ amount, source }, type) {
        const newReport = {
            id: (0, uuid_1.v4)(),
            source,
            amount,
            created_at: new Date(),
            updated_at: new Date(),
            type: type === "income" ? data_1.ReportType.INCOME : data_1.ReportType.EXPENSE
        };
        data_1.data.report.push(newReport);
        return newReport;
    }
};
__decorate([
    __param(0, (0, common_1.Param)('type')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "getReportById", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppService.prototype, "createReport", null);
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map