
import axios from 'axios'

export const getAll  = (callback)=>{
    axios.get('http://localhost:4000/departements',{headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}})
        .then( (res)=> callback(res))
        .catch ((err)=> callback(err))
}

export const add  = (dept, callback)=>{
    axios.post('http://localhost:4000/departements/add',dept, {headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}})
    .then((message)  => callback(message))
    .catch((err)=> callback(err)); 
}

export const remove  = (id, callback)=>{
    axios.delete(`http://localhost:4000/departements/delete/${id}`, {headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}}).then((message)=> callback(message))
    .catch((err)=> callback(err)); 
}

export const update  = (id, dept, callback)=>{
    axios.put(`http://localhost:4000/departements/update/${id}`,dept,{headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}}).then((message)=> callback(message))
    .catch((err)=> callback(err)); 
}

export const getDepartById  = (id, callback)=>{
    axios.get(`http://localhost:4000/departements/${id}`,{headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}})
        .then( (res)=> callback(res))
        .catch ((err)=> callback(err))
}

export const getDepartByName  = (name, callback)=>{
    axios.get(`http://localhost:4000/departements/name/${name}`,{headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}})
        .then( (res)=> callback(res))
        .catch ((err)=> callback(err))
}






