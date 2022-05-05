import { config } from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'

const { result_code } = config

const timeout = 1000

const adminList = [
  {
    path: '/Internal-management',
    component: '#',
    redirect: '/Internal-management/personal-management',
    name: 'internalManagement',
    meta: {
      title: '内部管理',
      icon: 'ep:management'
    },
    children: [
      {
        path: 'notice',
        component: '##',
        redirect: '/Internal-management/personal-management',
        name: 'notice',
        meta: {
          title: '公告'
        }
      },
      {
        path: 'organizational-structure',
        component: '##',
        redirect: '/Internal-management/personal-management',
        name: 'organizationalStructure',
        meta: {
          title: '组织架构'
        }
      },
      {
        path: 'adress-book',
        component: '##',
        redirect: '/Internal-management/personal-management',
        name: 'adressBook',
        meta: {
          title: '员工通讯录'
        }
      },
      {
        path: 'personal-management',
        component: 'views/PersonnelManagement/PersonnelManagement',
        name: 'personalManagement',
        meta: {
          title: '人事管理'
        },
        children: [
          {
            path: 'remind-set',
            component: 'views/RemindSet/RemindSet',
            name: 'remindSet',
            meta: { hidden: true }
          },
          {
            path: 'recruit',
            component: 'views/Recruit/Recruit',
            name: 'recruit',
            meta: { hidden: true }
          },
          {
            path: 'induction',
            component: 'views/Induction/Induction',
            name: 'induction',
            meta: { hidden: true },
            children: [
              {
                path: 'inner-push',
                component: 'views/InnerPush/InnerPush',
                name: 'innerPush',
                meta: { hidden: true }
              },
              {
                path: 'platform-info',
                component: 'views/PlatformInfo/PlatformInfo',
                name: 'platformInfo',
                meta: { hidden: true }
              },
              {
                path: 'interview-management',
                component: 'views/InterviewManagement/InterviewManagement',
                name: 'interviewManagement',
                meta: { hidden: true }
              },
              {
                path: 'resume-database',
                component: 'views/ResumeDatabase/ResumeDatabase',
                name: 'resumeDatabase',
                meta: { hidden: true }
              },
              {
                path: 'job-details/:id',
                component: 'views/JobDetails/JobDetails',
                name: 'jobDetails',
                meta: { hidden: true }
              }
            ]
          },
          {
            path: 'no-induction',
            component: 'views/NoInduction/NoInduction',
            name: 'noInduction',
            meta: { hidden: true }
          },
          {
            path: 'attendance',
            component: 'views/Attendance/Attendance',
            name: 'attendance',
            meta: { hidden: true }
          },
          {
            path: 'wages',
            component: 'views/Wages/Wages',
            name: 'wages',
            meta: { hidden: true }
          },
          {
            path: 'transfer-separation',
            component: 'views/TransferAndSeparation/TransferAndSeparation',
            name: 'transferAndSeparation',
            meta: { hidden: true }
          },
          {
            path: 'part-time-job',
            component: 'views/PartTimeJob/PartTimeJob',
            name: 'partTimeJob',
            meta: { hidden: true }
          }
        ]
      },
      {
        path: 'assets-management',
        component: '##',
        redirect: '/Internal-management/personal-management',
        name: 'assetsManagement',
        meta: {
          title: '资产管理'
        }
      },
      {
        path: 'finance-management',
        component: '##',
        redirect: '/Internal-management/personal-management',
        name: 'financeManagement',
        meta: {
          title: '财务管理'
        }
      },
      {
        path: 'downloads',
        component: '##',
        redirect: '/Internal-management/personal-management',
        name: 'downloads',
        meta: {
          title: '常用下载'
        }
      }
    ]
  },
  {
    path: '/sales-management',
    component: '#',
    redirect: '/Internal-management/personal-management',
    name: 'salesManagement',
    meta: {
      title: '销售管理',
      icon: 'ep:home-filled',
      alwaysShow: true
    },
    children: [
      {
        path: '/hidden',
        component: '##',
        meta: {
          hidden: true
        }
      }
    ]
  },
  {
    path: '/customer-company',
    component: '#',
    redirect: '/Internal-management/personal-management',
    name: 'customerCompany',
    meta: {
      title: '顾客及公司',
      icon: 'ep:home-filled',
      alwaysShow: true
    },
    children: [
      {
        path: '/hidden',
        component: '##',
        meta: {
          hidden: true
        }
      }
    ]
  },
  {
    path: '/financial-contract-management',
    component: '#',
    redirect: '/Internal-management/personal-management',
    name: 'financialContractManagement',
    meta: {
      title: '财务合同管理',
      icon: 'ep:home-filled',
      alwaysShow: true
    },
    children: [
      {
        path: '/hidden',
        component: '##',
        meta: {
          hidden: true
        }
      }
    ]
  },
  {
    path: '/business-management',
    component: '#',
    redirect: '/Internal-management/personal-management',
    name: 'businessManagement',
    meta: {
      title: '业务管理',
      icon: 'ep:home-filled',
      alwaysShow: true
    },
    children: [
      {
        path: '/hidden',
        component: '##',
        meta: {
          hidden: true
        }
      }
    ]
  },
  {
    path: '/propaganda-management',
    component: '#',
    redirect: '/Internal-management/personal-management',
    name: 'propagandaManagement',
    meta: {
      title: '宣传管理',
      icon: 'ep:home-filled',
      alwaysShow: true
    },
    children: [
      {
        path: '/hidden',
        component: '##',
        meta: {
          hidden: true
        }
      }
    ]
  },
  {
    path: '/stock-management',
    component: '#',
    redirect: '/Internal-management/personal-management',
    name: 'stockManagement',
    meta: {
      title: '宣传管理',
      icon: 'ep:home-filled',
      alwaysShow: true
    },
    children: [
      {
        path: '/hidden',
        component: '##',
        meta: {
          hidden: true
        }
      }
    ]
  },
  {
    path: '/test',
    component: 'views/Test/Test',
    name: 'test',
    meta: {
      title: '测试'
    }
  }
]

const testList: string[] = [
  '/level',
  '/level/menu1',
  '/level/menu1/menu1-1',
  '/level/menu1/menu1-1/menu1-1-1',
  '/level/menu1/menu1-2',
  '/level/menu2'
]

export default [
  // 列表接口
  {
    url: '/role/list',
    method: 'get',
    timeout,
    response: ({ query }) => {
      const { roleName } = query
      return {
        code: result_code,
        data: {
          list: roleName === 'admin' ? adminList : testList
        }
      }
    }
  }
] as MockMethod[]
