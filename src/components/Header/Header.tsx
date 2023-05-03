const Header: React.FC = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <a className="btn btn-gray-900 normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-gray-900">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Works</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { Header }
