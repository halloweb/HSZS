
export default {
    

   WARN_INFO:(state,data)=>{
      state.warnInfo.isWarn=true;
      state.warnInfo.message=data;
  }
}