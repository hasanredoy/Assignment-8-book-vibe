export const getStorage =(param)=>{
  const getLS = localStorage.getItem(param)
  if(getLS){
    return JSON.parse(getLS)
  }
  else return []
}

export const saveRead = (id)=>{
  const getLS = getStorage('read')
  const newLs = getLS.find(LSid => LSid.bookId === id.bookId)
  if(!newLs){
    getLS.push(id)
    localStorage.setItem('read', JSON.stringify(getLS))
  }
  else{
    alert('exist')
    return
  }
}
export const saveWishList = (id)=>{
  const getLS = getStorage('wishlist')
  const newLs = getLS.find(LSid => LSid.bookId === id.bookId)
  if(!newLs){
    getLS.push(id)
    
    localStorage.setItem('wishlist', JSON.stringify(getLS))
  }
  else{
    alert('exist')
    return
  }
}