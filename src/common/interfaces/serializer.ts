export class ApiResource {
    statusCode: number;
    message: string;

    constructor(json?: any) {
        if (json) {
            this.statusCode = json.statusCode;
            this.message = json.message;
        }
    }
}

export interface Serializer {
    fromJson(json: any): any;
    toJson(req: any): any;
}