import { isPlainObject } from './util'

/*针对post请求的data参数 需要将其转化为json对象提交给后端
  const data = {a:1, b: 2} => "{"a": 1, "b": 2}"
 */
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

/*针对返回的data数据对象 需要反转成js对象
  const data = "{"a": 1, "b": 2}" => {a:1, b: 2}
 */
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
