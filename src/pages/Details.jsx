import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { httpClient } from '../services/api/httpClient' 
import Button from '../component/Button'
import Notification from '../component/Notification'

const Details = () => {
  const params= useParams()

     // lay du lieu tu file data.json
  const [courses, setCourses] = useState([]) 

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await httpClient.get(`/courses/${params.id}`) 
        setCourses(response.data) 
      } catch (error) {
        alert(error.message)
      } 
    }
    fetchDetails() 
  }, [params.id])  

  const [showMessage, setShowMessage] = useState(false);
  
  const handleClick = () =>{
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 3000);
  }


  return (
    <div key = {courses.id}>
        {/*Header */}
        <div className='mt-16 ml-40 mb-1'>
            <h1 className='text-3xl font-bold mb-4'>
            {courses.title}
            </h1>
        </div>

        {showMessage && (
                <Notification
                  message="Đăng ký khóa học thành công"
                />
               )}

       {/*Main */}
        <div className='flex justify-around'>
        {/*Right */}
            <div className='ml-16 '>
                
                <div className=' overflow-hidden'>
                     <img src={courses.img} alt=""  className='mt-[50px] mb-[50px] object-contain max-h-[400px]'/>
                </div>
                
                <h1 className='font-bold text-xl mb-[30px]'>
                About Course

                </h1>


                {courses.content?.length > 0 && (
                    <ul className='list-disc ml-[40px] mb-[60px] max-w-[700px]'>
                    {courses.content.map((item) => (
                        <li key={`content-${courses.id}`}>{item}</li>
                    ))}
                    </ul>
                )}


            </div>
            {/*Left */}
            <div className="min-w-[300px]  h-[200px] border border-gray-300  rounded-xl shadow-md  mt-[50px]">

               <div className='p-5 bg-gray-200 rounded-t-lg border border-gray-300 '>
                    <Button
                      text ="Start Learning"
                      onClick={handleClick}
                    />
               </div>
                <div className="mt-4 space-y-3 text-gray-700 text-sm pl-2">
                    <div className="flex items-center space-x-2">
                    <span className="material-icons text-base"></span>
                    <span>All Levels</span>
                    </div>
                    <div className="flex items-center space-x-2">
                    <span className="material-icons text-base"></span>
                    <span>0 Total Enrolled</span>
                    </div>
                    <div className="flex items-center space-x-2">
                    <span className="material-icons text-base"></span>
                    <span>20/04/2025 Last Updated</span>
                    </div>
                </div>
             </div>

            
        </div>
    </div>
  )
}

export default Details