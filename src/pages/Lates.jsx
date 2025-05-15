import React from 'react'
import { Link } from 'react-router-dom'
import { httpClient } from '../services/api/httpClient'
import { useState, useEffect } from 'react'

 


const Lates = () => {
  // lay du lieu tu file data.json
    const [course, setCourse] = useState([])
    useEffect(() => {
      const fetchDetails = async () => {
        try{
          const response = await httpClient.get('/courses')
          setCourse(response.data)
        }catch (error){
          alert(error.message)
        }
      }
      fetchDetails()
    }, [])
    

  return (
    <div>
      {/* Title */}
      <div>
        <h2 className="text-4xl font-bold text-black text-center w-full m-10">
          Featured Courses
        </h2>
      </div>

      {/* Course Grid */}
      <div className="bg-gray-100 py-6">
        <div className="flex flex-wrap gap-4 px-4 justify-evenly ">
          {course.slice(0,6).map((course) => (
            <div
              key={course.id}
              className="max-w-3xl mx-[20px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-10px] w-[350px] min-h-[350px]"
            >
              <Link to={`cate/${course.id}`} onClick={()=> window.scrollTo(0, 0)}>
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 object-cover hover:brightness-110"
                />
              </Link>
              <div className="pl-6 space-y-4 pt-6 pb-6">
                <Link
                  to={`cate/${course.id}`}
                  className="text-2xl font-bold text-gray-800 hover:text-blue-500"
                  onClick={()=> window.scrollTo(0, 0)}>
                  {course.title}
                </Link>
              </div>
              <div className="space-y-4 pl-6 pb-6">
                <h2>By Brian004 In {course.category}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course List Button */}
      <div className="bg-gray-100 text-center py-6">
        <Link
          to="/cate"
          className="hover:bg-gray-100 rounded-2xl p-4 text-white bg-pink-500 hover:text-pink-500 inline-block"
        >
          <span>Course List</span>
        </Link>
      </div>
    </div>
  );
};

export default Lates
