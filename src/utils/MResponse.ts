
export enum RequestStatus {
    OK = "OK",
    ERROR = "ERROR",
}

export class MResponse<T> {

    private status: RequestStatus;
    private data?: T;
    private error?: string;

    constructor(config: {
        status: RequestStatus,
        data?: T,
        error?: string
    }
    ) {
        this.status = config.status;
        this.data = config.data;
        this.error = config.error;
    }

    public getStatus(): RequestStatus {
        return this.status;
    }

    public getData(): T {
        if (this.error) {
            throw Error("Response has error. Get error by calling getError()");
        }
        return this.data;
    }

    public getError(): string {
        if (!this.error) {
            throw Error("Response is ok. Get data by calling getData()");
        }
        return this.error;
    }

    public isOk(): boolean {
        return this.status == RequestStatus.OK;
    }

}