/**
 * Project texel
 * @author GennadySX on 17/07/2020
 */
import {createSchema, Type} from "ts-mongoose";


const RequestSchema = createSchema(
    {
        text: Type.string({ required: false }),
        number: Type.number({ required: false }),
    },
    { timestamps: { createdAt: true, updatedAt: true } }
);



export {
    RequestSchema
}
