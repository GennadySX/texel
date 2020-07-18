/**
 * Project texel
 * @author GennadySX on 17/07/2020
 */
import Model from '@models/Model';
import {typedModel} from 'ts-mongoose';
import {RequestSchema} from '../database/migrations/Requests';

export default class RequestModel extends Model{
    constructor(props = typedModel("requests", RequestSchema)) {
        super(props);
    }
}