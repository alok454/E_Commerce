import { NavLink } from "react-router-dom"

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-100 text-gray-800">
      <h1 className="text-5xl sm:text-8xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-base sm:text-lg">Oops! The page you're looking for doesn't exist.</p>
      <NavLink
        to="/"
        className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
      >
        Go Back Home
      </NavLink>
    </div>
  )
}

export default NotFound