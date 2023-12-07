import Taro from '@tarojs/taro'

export const getData = game => {
  return Taro.request({
    url: `https://www.wzguides.cn/wzguides/v1/apis/${game}/list?page=1&size=1000`,
  })
}
