/**
 * Created by Administrator on 2019/11/29.
 */
const apiUrl = 'http://localhost:3000/'

const globalAPI = {
  login: apiUrl + 'login', // 系统设置左侧菜单栏
  systemMenuData: apiUrl + 'aside', // 系统设置左侧菜单栏
  treeData: apiUrl + 'tree', // 树形菜单
  memberData: apiUrl + 'member', // 树形菜单
  memberData2: apiUrl + 'member2', // 树形菜单
  memberDatas: apiUrl + 'members', //
  memberNew: apiUrl + 'member-new' // 会员信息
}

export default globalAPI
