'use strict';

class DateUtils {
  static getDateDuJour() {
    var curDate = new Date();
    curDate.setHours(0, 0, 0, 0);
    return curDate;
  }
}

module.exports = DateUtils;