
//招商情报
 import  intelligence from '../components/intelligence.vue'
 import  headlines from '../components/intelligence/headlines.vue'
 import  policy from '../components/intelligence/policy.vue'
 import  expert from '../components/intelligence/expert.vue'


export default [{
	 path: '/intelligence',
     
     component: intelligence,
     children:[
       {path: '/',name: 'headlines',component: headlines},
       {path: '/policy',name: 'policy',component: policy},
       {path: '/expert',name: 'expert',component: expert},
     ]

}]