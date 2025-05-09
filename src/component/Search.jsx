import React from 'react'

const Search = ({value ,onChange}) => {
    

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Search