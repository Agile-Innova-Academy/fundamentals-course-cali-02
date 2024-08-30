export const putData =async(url, objaModificar)=>{
    try {
        const resp = await axios.put(url, objaModificar)
        alert("Se modifico exitosamente")        
        return resp.status
    }
    catch (error) {
        console.error(error)
    }
     
}