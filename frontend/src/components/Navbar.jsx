import React from 'react'

function Navbar() {
  return (
    <>

      <div className="navbar bg-gray-200 shadow-sm px-5 md:px-16">
        <div className="flex-1">
          <a className=" md:text-2xl font-bold ">BOOKSTORE</a>
        </div>

        <div className=' pr-2 flex flex-col  md:flex-row gap-3 md:text-l font-bold'>
          <ul><a href="">Home</a></ul>
          <ul><a href="">Contect</a></ul>
          <ul><a href="">About</a></ul>
          <ul><a href="">Services</a></ul>
        </div>
        <div className="flex gap-2">
       
          
            <div  className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.pinimg.com/736x/04/f8/88/04f888dce740f1adc42e782ea4f8c55c.jpg" />
              </div>
            </div>
          </div>
        </div>
      
      <hr className='border-yellow-500'/>
      
     

    </>
  )
}

export default Navbar
