import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="max-w-[400px] flex justify-between mx-auto mb-[100px]">
      <Link className="text-2xl text-blue-700 font-bold" to="/">
        Home
      </Link>
      <Link className="text-2xl text-blue-700 font-bold" to="/objects">
        Objects
      </Link>
      <Link className="text-2xl text-blue-700 font-bold" to="/users">
        Users
      </Link>
    </div>
  )
}
