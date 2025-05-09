import React from 'react'

const Pagination = ({currentPage , totalPages , onPageChange}) => {
  return (
    <ul className="pagination flex justify-center items-center mt-[40px] mb-[32px]">
          <li className="pagiItem mx-[12px]">
            <button
              className={`pagiLink text-2xl min-w-[40px] h-[30px] hover:text-blue-400 block text-center
                leading-[30px] font-[300px] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page} className="pagiItem mx-[12px]">
              <button
                className={`pagiLink text-2xl min-w-[40px] h-[30px] hover:text-blue-400 block text-center
                  leading-[30px] font-[300px] ${currentPage === page ? 'text-blue-500 font-bold' : ''}`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}

          <li className="pagiItem mx-[12px]">
            <button
              className={`pagiLink text-2xl min-w-[40px] h-[30px] hover:text-blue-400 block text-center
                leading-[30px] font-[300px] ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </li>
        </ul>
  )
}

export default Pagination