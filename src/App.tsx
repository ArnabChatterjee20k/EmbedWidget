import { useEffect, useState } from "react";

import "./App.css";

async function fetcher(){
  
  const res = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=EltFZhx8BqlJWb0nCPiDAO53G5kNQVPS_0IgRA0PymqOZCEKuCWwjoQBRd7lX2PtGRPVLD2N675Q0RfKSVTm36HNFccgmtupOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa_YBVKFkpvxJaAk4fISXk6Q4h8l126QIpe7HaVJzvQSWy346rCnQXkUNAJDTMS8wDYjOy4gqZh8CTyf228iPkfdN0UTObcsn2gXIuFltvcj9x4yNiCfAIY3fcEBJNG8wJQ&lib=Mb5GO0xzony3yuV7njcBq-C7IxZbmL8rn")
  const data = await res.json()
  return data
}

function App({auth}:{auth:number}) {
  const [data,setData]  = useState([])
  useEffect(()=>{
    fetcher().then(d=>setData(d))
  },[])

  const [state,setState] = useState(auth || 0)

  useEffect(()=>{
    setState(auth)
  },[auth])

  const len = data.length
  const randomPalette = data ? data[Math.floor(Math.random() * len)]:[];

  return (
    <>
    <p>{state}</p>
      {
        randomPalette?.map(color=><div style={{display:"inline-block",background:color,width:"60px",height:"60px"}}></div>)
      }
    </>
  );
}

export default App;
