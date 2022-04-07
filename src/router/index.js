import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/dashboard/AllView')


const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/charts/Charts')
const Widgets = () => import('@/views/widgets/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')
const Brands = () => import('@/views/icons/Brands')
const Flags = () => import('@/views/icons/Flags')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

//Customer
const CustomerAllView = () => import('@/views/customer/AllView')
const CustomerDetailAllView = () => import('@/views/customer/DetailView/')
const CEmPerson = () => import('@/views/customer/detailpage/EmPerson')

//Emevent
const EmeventAllView = () => import('@/views/emevent/AllView')
const EmeventOutingEvent = () => import('@/views/emevent/OutingEvent')
const EmeventActivityDetection = () => import('@/views/emevent/ActivityDetection')
const EmeventEquipmentFailure = () => import('@/views/emevent/EquipmentFailure')

//Emergency
const EmergencyAllView = () => import('@/views/emergency/AllView')

//Setting
const SettingAllView = () => import('@/views/setting/AllView')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/pages/login',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard/allView',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Users',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'customer',
          redirect: '/customer/allView',
          name: 'Customer',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'allView',
              name: 'AllView',
              component: CustomerAllView
            },
            {
              path: 'detailView/:recipientId',
              name: 'DetailView',
              component: CustomerDetailAllView
            },
            {
              path: 'emPerson',
              name: 'EmPerson',
              component: CEmPerson
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        },
        {
          path: 'emergency',
          redirect: '/emergency/allView',
          name: 'Emergency',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'allView',
              name: 'AllView',
              component: EmergencyAllView
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        },
        {
          path: 'emevent',
          redirect: '/emevent/allView',
          name: 'Emevent',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'allView',
              name: 'AllView',
              component: EmeventAllView
            },
            {
              path: 'outingEvent',
              name: 'OutingEvent',
              component: EmeventOutingEvent
            },
            {
              path: 'activityDetection',
              name: 'ActivityDetection',
              component: EmeventActivityDetection
            },
            {
              path: 'equipmentFailure',
              name: 'EquipmentFailure',
              component: EmeventEquipmentFailure
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        },
        {
          path: 'setting',
          redirect: '/setting/allView',
          name: 'Setting',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'allView',
              name: 'AllView',
              component: SettingAllView
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

