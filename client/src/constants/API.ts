/**
 * Project texel-front
 * @author GennadySX on 18/07/2020
 */

const origin = 'http://localhost:3007/'

const is = (param: string) => origin + param

export const API = {
    origin: origin,
    config: is('config'),
    run: is('run'),

}