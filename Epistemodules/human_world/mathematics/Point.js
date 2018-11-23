'use strict'
/**
 * Representation of a point in n-space
 * @param {Number[]} coordinates array of values that defines the position of the point
 */
class Point {
    /**
     * Instantiates a Point in n-space.
     * @param  {...Number} coordinates Numerical Coordinates.
     * @example  
     */
    constructor(...coordinates) {
        /**
         * @type {Number[]}
         */
        this.coordinates = coordinates;
    }
}