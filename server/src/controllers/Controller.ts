/**
 * Project texel
 * @author GennadySX on 17/07/2020
 */

class Controller {
    Model: Object | any

    constructor(model: any) {
        this.Model = model
    }


    public async get(by: any, callback: any): Promise<void> {
        this.Model.find(by, (err: Error, data: Object | any, payload: any) =>
            this.result(err, data, payload, callback))
    }

    public async getOne(by: any, callback: any): Promise<void> {
        await this.Model.findOne(by, (err: Error, data: Object | any, payload: any) =>
            this.result(err, data, payload, callback))
    }


    public async getLast(by: any, getInArray: any = null, callback: any): Promise<void> {
        await this.Model.findByOption(by,
            getInArray ?
                {[getInArray]: {$slice: -1}}
                : {sort: {createdAt: -1}},
            (error: Error, data: any) =>
                this.result(error, data && getInArray ? data[getInArray] : data, null, callback)
        )
    }

    public async getWith(by: any, foreignModel: any, foreignKey: any, callback: any): Promise<any> {
        await this.Model.findWith(by, foreignModel, foreignKey, (err: Error, data: Object | any, payload: any) =>
            this.result(err, data, payload, callback));
    }

    public async getAll(callback: any): Promise<void> {
        await this.Model.all((err: Error, data: Object | any, payload: any) =>
            this.result(err, data, payload, callback));
    }

    public async create(data: Object | any, callback: any): Promise<void> {
        await this.Model.create(data, (err: Error, data: Object | any, payload: any) =>
            this.result(err, data, payload, callback));
    }

    public async update(by: any, data: Object | any, callback: any): Promise<void> {
        await this.Model.update(by, data, (err: Error, data: Object | any, payload: any) =>
            this.result(err, data, payload, callback));
    }


    public async updateBy(by: any, data: Object | any, callback: any): Promise<void> {
        await this.Model.updateBy(by, data, (err: Error, data: Object | any, payload: any) =>
            this.result(err, data, payload, callback));
    }

    public async delete(by: any, callback: any): Promise<void> {
        await this.Model.delete(by, (err: Error, data: Object | any, payload: any) =>
            this.result(err, data, payload, callback));
    }

    private result(error: Error, data: Object | any, payload: any = null, callback: any) {
        callback(
            data ?
                data.user_id ? {data: data, user_id: data.user_id, payload: payload}
                    : {data: data, payload: payload}
                : {error: error, message: "Not found or other error"})
    }

}

export default Controller;
