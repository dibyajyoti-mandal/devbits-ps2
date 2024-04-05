export const createError = (st,msg)=>{
    const err = new Error();
    err.status = st
    err.message = msg
    return err
}