
//招商情报
 import  intelligence from '../components/intelligence.vue'
 import  headlines from '../components/intelligence/headlines.vue'
 import  policy from '../components/intelligence/policy.vue'
 import  expertView from '../components/intelligence/expertView.vue'
 import  expert from '../components/intelligence/expert.vue'
 import  expertList from '../components/intelligence/expertList.vue'
 import  expertArticle from '../components/intelligence/expertArticle.vue'
 import  businessRank from '../components/intelligence/businessRank.vue'
 import  parkInfo from '../components/intelligence/parkInfo.vue'
 import  parkDetails from '../components/intelligence/parkDetails.vue'
 import  focusPark from '../components/intelligence/focusPark.vue'

//精准招商
 import merchants from '../components/merchants.vue'
 import search from '../components/merchants/search.vue'
 import companySearch from '../components/merchants/companySearch.vue'
 import result from '../components/merchants/result.vue'

 import intelligent from '../components/merchants/intelligent.vue'
 import  industryType from '../components/merchants/industryType.vue'

 import  focusCompany from '../components/merchants/focusCompany.vue'

 //园区监管
 import supervision from '../components/supervision.vue'
 import parkMap from '../components/supervision/parkMap.vue'
 import companys from '../components/supervision/companys.vue'
 import goodNews from '../components/supervision/goodNews.vue'
 import badNews from '../components/supervision/badNews.vue'
 import companyOut from '../components/supervision/companyOut.vue'
 import outflow from '../components/supervision/outflow.vue'
 import outflowDetails from '../components/supervision/outflowDetails.vue'
 import infoWarning from '../components/supervision/infoWarning.vue'
 import infoChange from '../components/supervision/infoChange.vue'
 import parkCompanys from '../components/supervision/parkCompanys.vue'
 import companyDetail from '../components/supervision/companyDetail.vue'
 import warningDetails from '../components/supervision/warningDetails.vue'
 //模拟tab页的子路由跳转引入
 import companyBasic from '../components/supervision/tabRouter/companyBasic.vue'
 import companyBusiness from '../components/supervision/tabRouter/companyBusiness.vue'
 import companyInformation from '../components/supervision/tabRouter/companyInformation.vue'
 import companyFloor from '../components/supervision/tabRouter/companyFloor.vue'
 import companyRelation from '../components/supervision/tabRouter/companyRelation.vue'

export default [
     {path: '/intelligence',
     component: intelligence,
     children:[
       {path: '/',name: 'headlines',component: headlines},
       {path: 'policy',name: 'policy',component: policy},
       {path: 'expertView',component: expertView,children:[
            {path: '',name: 'expert',component: expert},
            {path: 'expertList',name: 'expertList',component: expertList,params: { expertId:1 }},
            {path: 'expertArticle',name: 'expertArticle',component: expertArticle}
           
       ]},
       {path: 'businessRank',name: 'businessRank',component: businessRank},
       {path: 'parkInfo',name: 'parkInfo',component: parkInfo},
       {path: 'parkDetails',name: 'parkDetails',component: parkDetails},
       {path: 'focusPark',name: 'focusPark',component: focusPark}
     ]

     },{
      path: '/merchants',
      
      component: merchants,
      children:[
          {path: '/',component: companySearch,children:[
           {path: '',name: 'search',component: search},
           {path: 'result',name: 'result',component: result}

         ]},
          {path: 'intelligent',component: intelligent,children:[
           {path: '',name: 'industryType',component: industryType},
           

         ]},
         {path: 'focusCompany',name: 'focusCompany',component: focusCompany}

      ]

     },{
       path: '/supervision',
       component: supervision,
       children:[
          {path: '/',name: 'parkMap',component: parkMap},
          {path: 'parkCompanys',component: parkCompanys,children:[
              {path: '',name: 'companys',component: companys},
              {path: 'companyDetail',component: companyDetail,children:[
                  {path: '',name: 'companyBasic',component: companyBasic},
                  {path: 'companyBusiness',name: 'companyBusiness',component: companyBusiness},
                  {path: 'companyInformation',name: 'companyInformation',component: companyInformation},
                  {path: 'companyFloor',name: 'companyFloor',component: companyFloor},
                  {path: 'companyRelation',name: 'companyRelation',component: companyRelation},
              ]},
          ]},
          {path: 'goodNews',name: 'goodNews',component: goodNews},
          {path: 'badNews',name: 'badNews',component: badNews},
          {path: 'companyOut',component: companyOut,children:[
                {path: '',name: 'outflow',component: outflow},
                {path: 'outflowDetails',name: 'outflowDetails',component: outflowDetails}
          ]},
          
          {path: 'infoWarning',component: infoWarning,children:[
            {path: '',name: 'infoChange',component: infoChange},
            {path: 'warningDetails',name: 'warningDetails',component: warningDetails}
          ]},
          
       ]
     }
]