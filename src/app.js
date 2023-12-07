import { createApp } from 'vue'
import './app.css'
import {
  Menu,
  MenuItem,
  Popup,
  Collapse,
  CollapseItem,
} from '@nutui/nutui-taro'

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Menu).use(MenuItem).use(Popup).use(Collapse).use(CollapseItem)

export default App
