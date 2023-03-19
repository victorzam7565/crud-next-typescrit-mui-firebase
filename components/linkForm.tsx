import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CreateIcon from '@mui/icons-material/Create';
import Button from '@mui/material/Button'
import React, {useState,useEffect} from 'react'
import { db } from "@/firebase/firebase"
import TextField from '@mui/material/TextField'



export const LinkForm=(props:any)=>{
const initialStateValues={
url:'',
name:'',
description:'',
}

const[values,setValues] = useState(initialStateValues);


const handleInputChange = (e:any) =>{
    const {name,value} = e.target;
    setValues({...values,[name]:value})
    
}
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        props.addOrEditLink(values);
        setValues({...initialStateValues})
    }
 
    const getLinkById =async (id:any) =>{
    const doc :any = await    db.collection("links").doc(id).get();
    setValues({...doc.data()})
    }



useEffect(()=>{
    console.log(props.currentId)
 if(props.currentId === ''){
    setValues({...initialStateValues});
 }else{
    getLinkById(props.currentId);
 }
},[props.currentId]);



return (
< div> 
    <form className="card card-body" onSubmit={handleSubmit} >
<div className="input-group-text bg-ligth">
<h1> Tu direccion aqui</h1>
<InsertLinkIcon/>
</div>

<div className="form-group" input-group>
<TextField
fullWidth
type="text" className="form-control"
placeholder="https://" name="url" onChange=
{handleInputChange} value={values.url}  
  />

    </div>

<div className="form-group" input-group>
<div className="input-group-text bg-light">
    <h1> tu nombre aqui</h1>
   <CreateIcon>Crear</CreateIcon>
</div>

<TextField  fullWidth type="text" className="form-control" name="name" placeholder="tu nombre aqui" 
onChange={handleInputChange} value={values.name}/>
    </div>


<div className="form-group">

<TextField fullWidth name="description" rows={3} className="form-control" placeholder="escribe una description"
onChange={handleInputChange} 
value={values.description} 
sx={{input: {textAlign: "center"}}}/>
</div>

<Button variant="contained" color="warning" onClick={handleSubmit}>
{props.currentId === '' ?'Guardar':'actualizar'}
</Button>



    </form>
    </div>
)

}




































































































