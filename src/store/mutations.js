import {HANDLEMENUS, HANDLESLIDEMENUS, HANDLETOPMENUID, HANDLESLIDEMENUID} from './mutation_types'

export default {
  // 顶部菜单栏
  [HANDLEMENUS] (state, menus) {
    state.menus = menus
  },
  // 侧边菜单栏
  [HANDLESLIDEMENUS] (state, slideMenus) {
    state.slideMenus = slideMenus
  },
  // 选择顶部导航条选中菜单项ID
  [HANDLETOPMENUID] (state, topMenuId) {
    state.topMenuId = topMenuId
  },
  // 选择侧边导航条选中菜单项ID
  [HANDLESLIDEMENUID] (state, slideMenuId) {
    state.slideMenuId = slideMenuId
  }
}
