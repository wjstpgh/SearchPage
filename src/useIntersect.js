import { useState,useEffect,useCallback } from "react";

const defaultOption={
    root:null,
    threshold:0.5,
    rootMargin:'0px'
};

const useIntersect=(onIntersect,option)=>{
    const [ref,setRef]=useState(null);
    const checkIntersect=useCallback(([entry],obsever) => {
        if (entry.isIntersecting) {
            onIntersect(entry,obsever);
        }
    },[]);

    useEffect(() => {
        let observer;
        if (ref){
            observer=new IntersectionObserver(checkIntersect,{
                ...defaultOption,
                ...option
            });
            observer.observe(ref);
        }
        return () => observer && observer.disconnect();
    }, [ref,option.root,option.threshold,option.rootMargin,checkIntersect]);
    return [ref,setRef];
}

export default useIntersect;