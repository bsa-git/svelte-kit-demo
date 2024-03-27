import { error } from '@sveltejs/kit';
import util from 'util';
import chalk from 'chalk';


//-------------- VIEW DATA ---------------//

/**
 * Inspector to display objects
 * @param desc
 * @param obj
 * @param depth
 */
const inspector = function (desc: string, obj: object, depth: number = 6) {
    console.log('\n', chalk.cyan(desc));
    console.log(util.inspect(obj, { depth, colors: true }));
};

export {
    inspector
}