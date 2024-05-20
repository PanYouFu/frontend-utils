/**
 *
 * 日期格式化
 *
 * @param dateStamp - 待转换的时间戳
 * @param type - 需要的日期格式（默认YYYY年MM月DD日）
 *
 * @returns YYYY年MM月DD日（默认）YYYY/MM/DD YYYY-MM-DD YYYY年M月D日 YYYY/M/D YYYY-M-D
 *
 * @example
 * ```js
 * import { formatDate } from 'frontend-utils'
 * const dateStamp = new Date().getTime()
 * const date = formatDate(dateStamp)
 * ```
 *
 * @remarks
 * 默认返回YYYY年MM月DD天格式
 *
 * @public
 */
function formatDate(dateStamp: number, type?: string): string {
  const date = new Date(dateStamp);
  const oYear = date.getFullYear();
  const oMonth = date.getMonth() + 1;
  const oDay = date.getDate();
  let returnDate = '';
  switch (type) {
    case 'YYYY/MM/DD':
      returnDate = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay);
      break;
    case 'YYYY-MM-DD':
      returnDate = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay);
      break;
    case 'YYYY/M/D':
      returnDate = oYear + '/' + oMonth + '/' + oDay;
      break;
    case 'YYYY-M-D':
      returnDate = oYear + '-' + oMonth + '-' + oDay;
      break;
    case 'YYYY年M月D日':
      returnDate = oYear + '-' + oMonth + '-' + oDay;
      break;
    default:
      returnDate = oYear + '年' + getzf(oMonth) + '月' + getzf(oDay) + '日';
      break;
  }
  return returnDate;
}

function getzf(num: number) {
  let str = num.toString();
  if (num < 10) {
    str = '0' + str;
  }
  return str;
}

export default formatDate;
