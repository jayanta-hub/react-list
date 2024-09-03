export const uuid = () => (Math.random() + 1).toString(36).substring(2);

export const fetchWithRetry=async (url,option={},retry=3,retryDelay=1000)=>{
    let attempt=0;
    while(attempt<retry){
        try{
            const res=await fetch(url,option);
            console.log("h",res)
            if(!res.ok) throw new Error(`HTTP error! status: ${res.statusText}`);
                return await res.json();
        }catch(err){
            console.log("k",err)
            attempt++
            if(attempt>=retry) throw err
        }
        await new Promise((resolve)=>setTimeout(resolve,retryDelay))
    }

}