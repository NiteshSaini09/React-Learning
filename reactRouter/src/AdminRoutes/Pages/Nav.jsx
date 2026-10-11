import { NavLink } from "react-router-dom";

const Nav = () => {
const links = [
{ name: "Dashboard", path: "/admin/dashboard" },
{ name: "Orders", path: "/admin/orders" },
];

return ( <nav className="bg-slate-900 text-white shadow-lg"> <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"> <h1 className="text-2xl font-bold tracking-tight">
Admin<span className="text-blue-400">Panel</span> </h1>

```
    <div className="flex gap-2">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === "/"}
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>

    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
        N
      </div>
      <div>
        <p className="text-sm font-semibold">Admin User</p>
        <p className="text-xs text-slate-400">Administrator</p>
      </div>
    </div>
  </div>
</nav>
);
};

export default Nav;
