import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
        <footer className="bg-gray-50 text-gray-600 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                 <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Learn with Us</h3>
                    <p className="text-sm ">
                        Premium online learning platform<br />{" "}
                        with courses ranging from<br />{" "}
                        beginner to advanced levels                    
                    </p>
                </div>

                 <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
                    <nav className="flex flex-col space-y-2">
                        <Link to={'/'} className="hover:text-blue-600 transition-colors">Home</Link>
                        <Link to={'/cate'} className="hover:text-blue-600 transition-colors">Courses</Link>
                        
                    </nav>
                </div>

                 <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
                    <div className="space-y-2 text-sm">
                        <p>📞 +84 123-4567</p>
                        <p>📧 support@edulearn.com</p>
                        <p>🏢 123 Education Street, New York, NY</p>
                    </div>
                </div>

               
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm">
                <p>© 2024 LatesLearn. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer