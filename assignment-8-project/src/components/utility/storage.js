import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    toast.success(' Book Added Successfully to Read List')
    localStorage.setItem('read', JSON.stringify(getLS))
  }
  else{
    toast.error('Already Exist in Read list')
    return
  }
}
export const saveWishList = (id)=>{
  const getLS = getStorage('wishlist')
  const newLs = getLS.find(LSid => LSid.bookId === id.bookId)
  if(!newLs){
    getLS.push(id)
    toast.success(' Book Added Successfully to Wishlist')
    localStorage.setItem('wishlist', JSON.stringify(getLS))
  }
  else{
    toast.error('Already Exist Wishlist')
    return
  }
}