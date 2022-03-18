const Utils = {
    isNull: what => {
       return what === null || typeof (what) === 'undefined';
    },
 
    isArr: what => {
       return (!Utils.isNull(what) && what.constructor.toString().indexOf('Array') > -1);
    },
 
    isObj: what => {
       const type = typeof what;
       return what !== null && (type === 'object' || type === 'function');
    },
 
    isStr: what => {
       return typeof what === 'string' || what instanceof String;
    },
 
    isLink: what => {
       return Utils.isStr(what) && /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(what);
    },
 
    isNum: what => {
       return !isNaN(parseFloat(what)) && isFinite(what);
    },
 
    isFn: what => {
       return (what && (typeof what === 'function' || what instanceof Function));
    },
 
    isBool: what => {
       return what === true || what === false;
    },
 
    isBasic: what => {
       return Utils.isStr(what) || Utils.isNum(what) || Utils.isBool(what) || Utils.isFn(what);
    },
 
    // // from : https://github.com/lodash/lodash/blob/master/.internal/isIndex.js
    // isIndex: (what, length) => {
    //     const type = typeof what;
    //     length = length === undefined ? MAX_SAFE_INTEGER : length;
    //     return !!length && 
    //     (type === 'number' || 
    //         (type !== 'symbol' && reIsUint.test(what))) &&
    //         (what > -1 && what % 1 === 0 && what < length) 
    // },
 
    isEmpty: what => {
       if (Utils.isArr(what)) {
          var i = 0,
             length = what.length;
          for (; i < length; i++) {
             if (Utils.isObjEmpty(what[i])) {
                return true;
             }
          }
          return false;
       } else {
          return Utils.isObjEmpty(what);
       }
    },
 
    isObjEmpty: what => {
       if (what) {
          var key;
          for (key in what) {
             return false;
          }
       }
       return true;
    },
 
    // Note: 该方法会影响 b 值
    merge: (a, b) => {
       if (!a || !b) {
          return a || b;
       }
 
       Object.keys(b).forEach((bk) => {
          if (Utils.isNull(b[bk]) || Utils.isBasic(b[bk])) {
             a[bk] = b[bk];
          } else if (Utils.isArr(b[bk])) {
             //
             if (a[bk]) {
                if (Utils.isBasic(a[bk])) {
                   a[bk] = [a[bk]];
                }
             } else {
                a[bk] = [];
             }
             b[bk].forEach((i, index) => {
                if (a[bk].length < index) { // push
                   if (Utils.isNull(i) || Utils.isBasic(i)) {
                      a[bk].push(i);
                   } else {
                      a[bk].push(Utils.merge(Utils.isArr(i) ? [] : {}, i));
                   }
                } else {                  // merge
                   if (Utils.isBasic(i)) {
                      a[bk][index] = i;
                   } else {
                      a[bk][index] = Utils.merge(a[bk][index], i);
                   }
                }
             })
          } else if (b[bk].tagName && b[bk].appendChild && b[bk].removeChild && b[bk].style) {
             a[bk] = b[bk];
          } else {
             a[bk] = a[bk] || {};
             Utils.merge(a[bk], b[bk]);
          }
       });
       return a;
    },
 
    // 更好做法：https://github.com/sindresorhus/object-assign
    assign: (a, b) => {
       let aa = Utils.merge({}, a);
       return Utils.merge(aa, b);
    },
 
    JSONCopy: obj => {
       return JSON.parse(JSON.stringify(obj));
    },
 
    // from: https://github.com/lodash/lodash/blob/master/.internal/assignValue.js
    assignValue: (obj, key, value) => {
       const objValue = obj[key];
 
       if (!(Object.prototype.hasOwnProperty.call(obj, key) && Utils.eq(objValue, value)) || (value === undefined && !(key in obj))) {
          obj[key] = value;
       }
    },
 
    // from: https://github.com/lodash/lodash/blob/master/eq.js
    eq: (value, other) => {
       return value === other || (value !== value && other !== other);
    },
 
    extend: function (a, b) {
       var n;
       if (!b) {
          return a;
       }
       if (!a) {
          a = {};
       }
       for (n in b) {
          a[n] = b[n];
       }
       return a;
    },
 
    /**
     * 数值格式化，
     * @param val 需要格式化的数值
     * @param decimals 保留位数
     */
    numberFormat: (val, decimals, thousandsSep) => {
 
       val = (typeof decimals !== 'undefined' ? val.toFixed(decimals) : val).toString();
       // 分离数字的小数部分和整数部分
       var parts = val.split('.');
 
       // 整数部分加[thousandsSep]分隔, 借用一个著名的正则表达式
       parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (thousandsSep || ','));
 
       if (!decimals) {
          return parts[0];
       }
 
       return parts.join('.');
    },
 
    dateFormat: (timestamp, separator, isDateTime) => {
       if (separator === undefined) {
          separator = '';
       }
       var date = timestamp ? new Date(timestamp) : new Date(),
          year = date.getFullYear(),
          month = date.getMonth() + 1,
          day = date.getDate(),
          result = year + separator + (month > 9 ? month : '0' + month) + separator + (day > 9 ? day : '0' + day);
 
       if (!isDateTime) {
          return result;
       }
 
       var hours = date.getHours(),
          minutes = date.getMinutes(),
          seconds = date.getSeconds();
 
       return result + ' ' + (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds);
    },
 
    noop: function () {
 
    },
 
    TimeUnit: {
       Second: 1000,
       Minute: 60 * 1000
    },
 
    timeRound: (timestamp, unit, isFloor) => {
       let amount = timestamp / unit;
       amount = Math[isFloor ? 'floor' : 'ceil'](amount);
       return amount * unit;
    },
 
    /**
     * 计算最近的周期
     * 例如： 15:33:20 ，周期为 5s, 则最近的周期是 15:33:20,
     *        15:33:00
     * 
     */
    timeClose: (timestamp, peroid) => {
       let date = new Date(timestamp),
          seconds = date.getSeconds();
 
       if (seconds % peroid === 0) {
          return date;
       }
       return Utils.TimeUnit(timestamp, peroid * 1)
    }
 }
 
 
 export default Utils;