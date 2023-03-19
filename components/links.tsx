//import { LinkForm } from "./linkForm"
import { db } from "@/firebase/firebase"
import React,{useEffect, useState} from 'react';
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";

import {toast} from 'react-toastify'
import EditIcon from '@mui/icons-material/Edit';
import { LinkForm } from "./linkForm";

export const Linke= () => {

const [links,setLinks] = useState<any[]> ([])
 
const [currentId, setCurrentId] = useState('');


const addOrEditLink = async (linkObject:any) => {
if(currentId === ''){
  await db.collection("links").doc().set(linkObject)
console.log('new task added')
toast('tarea creada',{
  
});
}else{
  await db.collection("links").doc(currentId).update(linkObject);
  toast('link actualizado',{
type: 'info'
  });
  setCurrentId('');
}




};

const onDeleteLink = async (id:any)=>{
  if (window.confirm("quieres borrar de verdad?")){
    await db.collection("links").doc(id).delete();
    console.log('task delete')
    toast('tarea eliminada',{
      autoClose:2000,
    });
  }
};



  const getLinks = async () => {
  db.collection("links").onSnapshot(
      (querySnapshot) => {
      const docs:any = [];
        querySnapshot.forEach(doc =>{
          docs.push({...doc.data(), id:doc.id});
        });
        setLinks(docs);
      });
  };

  useEffect(()=>{
    getLinks();
  },[]);


  return ( 
  <> 
  <div className="col-md-4 p-2">


  <LinkForm {...{addOrEditLink,currentId,links}} />
     </div>
 <div className="col-md-8 P-2">
  {links.map(link =>(
       <div className="card mb-1" key={link.id}>
        <div className="card-body">
            <div className="d-flex justify-content-between">
              
            <h4>{link.name}</h4>
            <EditIcon  onClick={()=> setCurrentId(link.id)}/>
            <DeleteIcon onClick={()=> onDeleteLink(link.id)}></DeleteIcon>
            </div>

          
          <p>{link.description}</p>
          <Link href={link.url} target="_blank">
          <a >Go to</a>
          {link.url}
          </Link>
        </div>
       </div>
  ))}
 </div>
</>
 )
}
