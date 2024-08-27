export const patchData = async(url, id, obj)=>{
try {
  await fetch(`${url}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(obj),
    headers: {
     'Content-Type': 'application/json',
    }
  }).then(
    alert("El objeto ha sido modificado exitosamente")
  )    
} catch (error) {
    console.log(error)
}      

}