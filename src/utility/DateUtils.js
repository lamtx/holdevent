const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function pad(num: number, size: number) {
  var s = num + '';
  while (s.length < size) {
    s = '0' + s
  }
  return s
}

function isPM(date: Date) {
  return date.getHours() >= 12
}

export function ensureDate(date: Date|string): Date {
  if (!date) {
    return date;
  }
  if (typeof(date) === 'string') {
    return new Date(date);
  }
  return date;
}

/**
 * Example 01, Jan
 * @param date
 * @returns {*}
 */
export function formatDate(date): string {
  if (!date) {
    return '';
  }
  let d = this.ensureDate(date);
  return pad(d.getDate(), 2) + ', ' + months[d.getMonth()];
}

/**
 * Example: 06:02 AM
 * @param date
 * @returns {*}
 */
export function formatTime(date: Date): string {
  if (!date) {
    return '';
  }
  let d = this.ensureDate(date);
  let pm = isPM(d);
  var hours = d.getHours() % 12;
  hours = hours == 0 ? 12 : hours;
  return pad(hours, 2) + ':' + pad(d.getMinutes(), 2) + ' ' + (pm ? 'PM' : 'AM');
}

/**
 * Pattern: d/M/yy h:mma
 * @param date
 */
export function formatActiveRequestTime(date: Date): string {
  let pm = isPM(date);
  var hours = date.getHours() % 12;
  hours = hours == 0 ? 12 : hours;
  let year = date.getFullYear() % 100;
  let month = date.getMonth() + 1;
  return date.getDate() + '/' + month + '/' + pad(year, 2) + ' ' + hours + ':' + pad(date.getMinutes(), 2) + (pm ? 'PM' : 'AM');

}