import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxiosInstance {
  const context = new Axios()
  // const instance = Axios.prototype.request
  // 方法里面有this 需要绑定到this
  const instance = Axios.prototype.request.bind(context)

  // 将实例上的方法全部导入到原型上
  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
