/**
 * Project texel
 * @author GennadySX on 17/07/2020
 */

import dotenv from 'dotenv';
import app from '@server'



export const envServer = require('dotenv').config({path: './src/.env'})

if (envServer.error) {
    throw envServer.error;
}




const port = Number(3007)

const configApi = app.listen(port, () => {
    console.log('Server running by port', port)
})