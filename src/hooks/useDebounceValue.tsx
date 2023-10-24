import { useEffect, useState } from "react"



export const useDebounceValue = (input:string='',time:number=300) => {

    const [debounceValue, setDebounceValue] = useState(input);
   
    useEffect(() => {
        const timeout=setTimeout(()=>{
                        setDebounceValue(input);
                        },time)
        return ()=>{
            clearTimeout(time)
        }
      }, [input])
    
  return {
    debounceValue
  }
}
