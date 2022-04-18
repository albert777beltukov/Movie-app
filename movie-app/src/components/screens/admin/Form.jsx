import React from 'react';
import { useForm } from 'react-hook-form';
import {collection, addDoc, serverTimestamp} from 
'firebase/firestore' 
import {db} from '../../../firebase'

const Form = () => {
    const {register, handleSubmit, formState:{errors}, reset
} = useForm()

 const onSubmit = async data => {
     console.log(data);
     
     reset()

     try {
       await addDoc(collection(db, 'video'), {
        timestamp: serverTimestamp(),
        thumbnailPath: data.thumbnailPath,
        videoUrl: data.videoUrl
       })
     } catch (error) {
       alert (error)
     }
 }

return (
<div className='py-10 px-20'
style={{backgroundColor: 'rgba(0,0,0,0.5)', width:'45%'}}>
<h2 className='mb-8 text-white font-bold text-2xl text-center'>
Add new series
</h2>
<form onSubmit={handleSubmit(onSubmit)}>

    <input 
     className='w-full px-4 py-2 outline-none
     block mb-5 text-white' 
     placeholder='Enter thumbnail path'
     style={{backgroundColor: 'rgba(255,255,255, 0.3)'}}
     {...register('thumbnailPath', {
         required: true
     })}
     />
     {errors.thumbnailPath && (
         <span className='text-red-700'>
             Plz fill thumbnail path field
         </span>
     )}

     <input 
     className='w-full px-4 py-2 outline-none
     block mb-5 mt-4 text-white' 
     placeholder='Enter video url'
     style={{backgroundColor: 'rgba(255,255,255, 0.3)'}}
     {...register('videoUrl', {
         required: true
     })}
     />
     {errors.videoUrl && (
         <span className='text-red-700'>
             Plz fill video url field
         </span>
     )}

     <input 
     type="submit"
     value='Add'
     className='block border-none py-3 px-10
     outline-none mx-auto mt-10 cursor-pointer bg-pink-800'
     style={{minWight: 140}}
       />

</form>
</div>
)
}
export default Form