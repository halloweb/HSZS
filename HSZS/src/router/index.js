
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


export default [{
	 path: '/intelligence',
    
     component: intelligence,
     children:[
       {path: '',name: 'headlines',component: headlines},
       {path: 'policy',name: 'policy',component: policy},
       {path: 'expertView',component: expertView,children:[
            {path: '',name: 'expert',component: expert},
            {path: 'expertList',name: 'expertList',component: expertList,params: { expertId:1 }},
            {path: 'expertArticle',name: 'expertArticle',component: expertArticle}
           
       ]},
       {path: 'businessRank',name: 'businessRank',component: businessRank},
       {path: 'parkInfo',name: 'parkInfo',component: parkInfo,},
       {path: 'parkDetails',name: 'parkDetails',component: parkDetails},
       {path: 'focusPark',name: 'focusPark',component: focusPark}
     ]

}]