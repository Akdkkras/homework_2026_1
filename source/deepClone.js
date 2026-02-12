'use strict';

/**
 * Функция, создающая глубокую копию объекта
 * @param {Object} obj - объект для копирования
 * 
 * @example
 * // returns { a: 1, b: { c: 2 } }
 * const original = { a: 1, b: { c: 2 } };
 * const copy = deepClone(original);
 * 
 * @returns {Object}
 */
const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof Set) {
        return new Set(obj);
    }

    if (obj instanceof Map) {
        return new Map(obj);
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const cloned = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }

    return cloned;
}
