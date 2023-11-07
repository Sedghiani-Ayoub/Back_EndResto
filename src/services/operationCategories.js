
import axios from 'axios'


export const getAllCat  = (callback)=>{
    axios.get('http://localhost:4000/categories',{headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}})
        .then( (res)=> callback(res))
        .catch ((err)=> callback(err))
}

export const getCatById = (id, callback)=>{
    axios.get(`http://localhost:4000/categories/${id}`,{headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}})
        .then( (res)=> callback(res))
        .catch ((err)=> callback(err))
}

export const getcatByName = (name, callback)=>{
    axios.get(`http://localhost:4000/categories/name/${name}`,{headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}})
        .then( (res)=> callback(res))
        .catch ((err)=> callback(err))
}

export const addCat  = (cat, callback)=>{
    axios.post('http://localhost:4000/categories/add',cat, {headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}})
    .then((message)  => callback(message))
    .catch((err)=> callback(err)); 
}

export const removeCat  = (id, callback)=>{
    axios.delete(`http://localhost:4000/categories/delete/${id}`, {headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}}).then((message)=> callback(message))
    .catch((err)=> callback(err)); 
}

export const updateCat  = (id, cat, callback)=>{
    axios.put(`http://localhost:4000/categories/update/${id}`,cat,{headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}}).then((message)=> callback(message))
    .catch((err)=> callback(err)); 
}



