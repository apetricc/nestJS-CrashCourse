"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomInterceptor = void 0;
const rxjs_1 = require("rxjs");
class CustomInterceptor {
    intercept(context, handler) {
        console.log("This is before/intercepting the request");
        console.log({ context });
        return handler.handle().pipe((0, rxjs_1.map)((data) => {
            console.log("This is the response coming out of the interceptor before we manipulate it:");
            console.log({ data });
            const response = Object.assign(Object.assign({}, data), { createdAt: data.created_at });
            delete response.updated_at;
            delete response.created_at;
            console.log("this is the data after we manipulated it inside interceptor: ");
            console.log({ response });
            return response;
        }));
    }
}
exports.CustomInterceptor = CustomInterceptor;
//# sourceMappingURL=custom.interceptor.js.map