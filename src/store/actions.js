import {HANDLEMENUS, HANDLESLIDEMENUS, HANDLETOPMENUID, HANDLESLIDEMENUID} from './mutation_types'

export default {
  // 改变顶部菜单
  handleMenus ({commit}, menus) {
    commit(HANDLEMENUS, menus)
  },
  // 改变侧边菜单
  handleSlideMenus ({commit}, slideMenus) {
    commit(HANDLESLIDEMENUS, slideMenus)
  },
  // 选择顶部导航条选中菜单项ID
  choiceTopMenuId ({commit}, topMenuId) {
    commit(HANDLETOPMENUID, topMenuId)
  },
  // 选择侧边导航条选中菜单项ID
  choiceSlideMenuId ({commit}, slideMenuId) {
    commit(HANDLESLIDEMENUID, slideMenuId)
  }
}
