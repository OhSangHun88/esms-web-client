export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: '대쉬보드',
        to: '/dashboard/allView',
        icon: 'cil-home',
      },
      {
        _name: 'CSidebarNavItem',
        name: '고객관리',
        to: '/customer/allView',
        icon: 'cil-spreadsheet',
      },
      {
        _name: 'CSidebarNavItem',
        name: '응급안전서비스',
        to: '/emergency/allView',
        icon: 'cil-user',
      },
      {
        _name: 'CSidebarNavItem',
        name: '응급이벤트',
        to: '/emevent/allView',
        icon: 'cil-bell',
      },
      {
        _name: 'CSidebarNavItem',
        name: '설정',
        to: '/setting/allView',
        icon: 'cil-settings',
      }
    ]
  }
]