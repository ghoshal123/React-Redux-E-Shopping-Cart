export const ADD=(product)=>{
    return{
       type:'ADD_CART',
       payload:product
    }
}

export const DELETE=(id)=>{
    return{
       type:'DEL_CART',
       payload:id
    }
}
export const INDREM=(item)=>{
    return{
       type:'REM_INDV',
       payload:item
    }
}