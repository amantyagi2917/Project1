import React, { useEffect, useState } from 'react';
import Footer from './Footer'
import Url from "../axios/axios";




function Banner() {


 


  const [form, setform] = useState({

    bookname: "",
    booktitle: "",
    authername: "",
    publish: "",
    price: ""

  })

  const [formdata, setformdata] = useState([])

  const [update,setupdate]=useState(false)


  const handleform = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }))

  }
  // console.log('form', form);
  const submit = async (e) => {
    e.preventDefault();
    try {
   if(!update){

      if (!form?.bookname || !form.booktitle || !form.authername || !form.publish || !form.price) {
        alert("All fields are require")
      }
      const { data } = await Url.post('/create', form)
      setform({
        bookname: "",
        booktitle: "",
        authername: "",
        publish: "",
        price: ""

      })
      getdata();

      console.log(data);
      console.log("form are submitted....");
    }
    else{
   
      try {
         
        
        const {data}=  await Url.put(`/update/${form._id}`,form)
          
         console.log(data); 
         
        if(data?.success){
          getdata();
          console.log('data updated successfully ');
          
          setform({
        bookname: "",
        booktitle: "",
        authername: "",
        publish: "",
        price: ""

        
      })
      setupdate(false)
      
        }
        


      } catch (error) {
        console.log(error);
        
      }
          
    }

    } catch (error) {

      console.log('apka error yha h submit me', error);

    }
  }


  const getdata = async () => {
    try {
      const { data } = await Url.get("/alldata")
      if (data?.success) {
        setformdata(data.details)
      }
      console.log(data);


    } catch (error) {
      console.log('error', error);
    }



  }
  useEffect(() => {
    getdata()
  }, [])

  async function delet(id) {
    try {
      const { data } = await Url.delete(`/delet/${id}`)
      if (data?.success) {
        getdata()
      }
    } catch (error) {
      console.log(error);
    }
  }

   function edit(data) {
    setform({
      bookname: data.bookname,
      booktitle: data.bookname,
      authername: data.authername,
      publish: data.publish,
      price: data.price,
      _id:data._id
    })
    setupdate(true)
       
  }

  return (
    <>

      <div className=' bg-gray-200 mt-10'>
        <div className='w-full  flex justify-end '>
        </div>
        <hr className='border-gray-400 border-0.5 mb-1' />



        <form onSubmit={submit} className=' grid grid-cols-5 gap-4 text-center '>




          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Book name</label>
            <input type="text" placeholder='Book name' className=' input text-center border-none outline-none mt-4'
              name='bookname'
              value={form.bookname}
              onChange={handleform} />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Book title</label>
            <input type="text" placeholder='Booktitle ' className=' input text-center  border-none outline-none mt-4'
              name='booktitle'
              value={form.booktitle}
              onChange={handleform} />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Author name</label>
            <input type="text" placeholder='Author name' className='input text-center  border-none outline-none mt-4'
              name='authername'
              value={form.authername}
              onChange={handleform} />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Publish</label>
            <input type="text" placeholder='publish' className='input text-center  border-none outline-none mt-4'
              name='publish'
              value={form.publish}
              onChange={handleform} />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-xl'>Price</label>
            <input type="number" placeholder='price' className='input text-center  border-none outline-none mt-4'
              name='price'
              value={form.price}
              onChange={handleform} />
          </div>



          <div className="col-span-5 flex justify-end mt-4">

          </div>

          <button
            type="submit"
            className="btn bg-gray-400 font-bold w-32 h-9 text-white border-gray-500 border-2"

          >
            Add
          </button>

        </form>

      </div>


      <h1 className='text-3xl font-bold text-center text-gray-700 shadow mb-3.5 '>Output</h1>
      <table className='w-full mt-10 bg-blue-50 '>

        <thead>
          <tr className='flex items-center justify-between gap-2 pt-2.5  ' >
            <th className='text-center w-1/5 ' >Book name</th>
            <th className='text-center w-1/5 '>Book Title</th>
            <th className='text-center w-1/5 '>Auther name</th>
            <th className='text-center w-1/5 '>Publish</th>
            <th className='text-center w-1/5 '>Price</th>
            <th className='text-center w-1/5 '>Action</th>
          </tr>
        </thead>

        <tbody className=' block w-full h-71
         overflow-y-auto text-gray-600 bg-blue-50 ' >
          {formdata.map((val, idx) => {
            // console.log(val);

            return <tr key={idx} className='flex items-center justify-bitween gap-2 pt-2 '>
              <td className='text-center w-1/5 border border-none'>{val.bookname}</td>
              <td className='text-center w-1/5 border border-none'>{val.booktitle}</td>
              <td className='text-center w-1/5 border border-none '>{val.authername}</td>
              <td className='text-center w-1/5 border border-none '>{val.publish}</td>
              <td className='text-center w-1/5 border border-none '>{val.price}</td>


              <td className='text-center w-1/6 border border-none flex justify-center gap-5 '>

                <button
                  onClick={() => {edit(val)}}

                  className='btn h-7 bg-white border-none  '>Edit</button>
                <button

                  onClick={() => { delet(val._id) }}
                  className='btn h-7 bg-white border-none '>Delete</button>
              </td>

            </tr>
          })}
        </tbody>

      </table>
    
      <Footer />

    </>
  )
}


export default Banner
