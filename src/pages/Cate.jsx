import { useState, useEffect } from 'react';
import { Link,useSearchParams  } from 'react-router-dom';
import { httpClient } from '../services/api/httpClient';
import Search from '../component/Search';
import Pagination from '../component/Pagination';
import Button from '../component/Button';
import Notification from '../component/Notification';
const CourseList = () => {
  // lay du lieu tu file data.json
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try{
        const response = await httpClient.get('/courses')
        setCourses(response.data)
      }catch (error) {
        alert(error.message)
      }
    }
    fetchDetails()
  }, [params.id])


  const [searchTerm, setSearchTerm] = useState('');
  
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState(pageParam);
  const itemsPerPage = 4;

  

  const filteredCourses = courses.filter(courses =>
    courses.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    courses.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setSearchParams({ page: page.toString() }); 
    setCurrentPage(page);
  };
  
   const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
    setCurrentPage(1); 
    setSearchParams({ page: '1' }); 
  };
  
  


  return (
    <div className="container mx-auto p-6 font-sans ">
      {/* Search */}
      <Search  value={searchTerm} onChange={handleSearchChange} />

    

      {/* Course Cards */}
      <div className='py-6 '>
        <div className='flex flex-wrap gap-4 px-4 justify-evenly '>
          {currentItems.length > 0 ? currentItems.map(courses => (
            <div key={courses.id} className="max-w-3xl mx-[20px] bg-white rounded-xl shadow-md 
              overflow-hidden hover:shadow-lg w-[350px] h-[450px] flex flex-col transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
              <Link to={`/cate/${courses.id}?page=${currentPage}`} onClick={()=> window.scrollTo(0, 0)}>
                <img src={courses.img} alt={courses.title} className='w-full h-48 object-cover hover:brightness-110' />
              </Link>
              <div className='p-6 flex-1 flex flex-col justify-between'>
                <div>
                  <Link to={`/cate/${courses.id}?page=${currentPage}`} className="text-2xl font-bold text-gray-800 hover:text-blue-500 block mb-4" onClick={()=> window.scrollTo(0, 0)}>
                    {courses.title}
                  </Link>
                  <div className="text-gray-600 mb-4">By Brian004 In {courses.category}</div>
                </div>

               <Link to={`/cate/${courses.id}?page=${currentPage}`}>
                  <Button
                    text ="Enroll Course"
                  />
               </Link>

              </div>
            </div>
          )) : (
            <p className="text-center text-gray-500 w-full mt-10 text-xl">No courses found.</p>
          )}
        </div>
      </div>

      {/* Pagination */}
      {filteredCourses.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default CourseList;
