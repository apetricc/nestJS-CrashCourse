//an interceptor is an entity inside nestJS, and entites are classes

import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common"
import { Observable } from "rxjs"
import { data } from "./data"
import { map } from 'rxjs'

export class CustomInterceptor implements NestInterceptor {
    //we get an error saying we must have property "intercept" to impletment 'NestInterceptor'
    // but I think that means we need a method called intercept
    intercept(
        // the context tells us more info about the incoming request, maybe the query params or whatever
        // the handler is the endpoint or the next interceptor that we want to give it to,
        // that we want to hand off our request to after we're done intercepting it here,
        // in the diagram the handler would be the right box
        context: ExecutionContext, handler: CallHandler
    ){
        console.log("This is before/intercepting the request");
        //'context' is the data in the incoming request
        console.log({ context });

        //going to return an 'Observable' like in RXJS
        // anything in this pipe is handling the outgoing response
        return handler.handle().pipe(
            map((data) => {
                //this is the data that we'll be getting back from the interceptor
                console.log("This is the response coming out of the interceptor before we manipulate it:");
                console.log({ data });
                const response = {
                    ...data,
                    createdAt: data.created_at,
                };
                delete response.updated_at;
                delete response.created_at;
                console.log("this is the data after we manipulated it inside interceptor: ");
                console.log({ response });

                return response;
            }),
        );
    }
}
