
export default {
    

   WARN_INFO:(state,data)=>{
      state.warnInfo.isWarn=true;
      state.warnInfo.message=data;
  },
  CANCLE_WARN:(state)=>{
  	state.warnInfo.isWarn=false;
  	state.warnInfo.message="";
  }
}