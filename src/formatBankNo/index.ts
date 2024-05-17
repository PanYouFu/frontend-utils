/**
 * 银行卡号格式化 4位一分隔
 *
 * @param bankNo - 银行卡号
 *
 * @returns 格式化后的银行号号
 *
 * @example
 * ```js
 * import { formatBankNo } from 'frontend-utils'
 * const bankNo = formatBankNo('123412341234123')
 * ```
 *
 * @public
 */
function formatBankNo(bankNo: string): string {
  const testRegexp = /^\d+$/g;
  let str = '';

  let unused = '';
  let unused = '';

  if (!testRegexp.test(bankNo)) {
    throw new SyntaxError('请输入正确的银行卡号');
  } else {
    str = bankNo.replace(/\s/g, '').replace(/(\w{4})(?=\w)/g, '$1 ');
  }
  return str;
}

export default formatBankNo;
