
import React,{useState,useEffect} from 'react';

const Pagination=({parentFunction,pageNo})=>{
    const [pageNoPagination, setPageNoPagination] = useState(pageNo);
    function incPage(){
        if(pageNoPagination<500){
            setPageNoPagination(pageNoPagination+1);
        }
    }
    function decPage(){
        if(pageNoPagination>1){
            setPageNoPagination(pageNoPagination-1);
        }
    }
    useEffect(()=>{
        parentFunction(pageNoPagination);
    },[pageNoPagination]);
    useEffect(()=>{
        setPageNoPagination(pageNo);
    },[pageNo])
  
    return(
        <div className='' style={{float:'right',color:'white', display:'flex'}}>
            <button style={{fontWeight:'bolder',cursor:'pointer'}} onClick={decPage}>&lt;</button>
            <span><h4>Page {pageNoPagination}</h4></span>
            <button style={{fontWeight:'bolder',cursor:'pointer'}} onClick={incPage}>&gt;</button>
        </div>
    );
}
export default Pagination;