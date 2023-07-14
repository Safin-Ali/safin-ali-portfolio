import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = ():void => {
    useEffect(()=>{
        AOS.init({
            delay:0,
            once:true,
        })
        AOS.refresh()
        AOS.refreshHard()
    },[])
};

export default useAOS;