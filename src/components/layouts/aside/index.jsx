import "./style.scss";
import { navigation } from "@/mocks/navigation";
import { logOut } from "@utils";
import { NavLink , Link} from "react-router-dom";
const index = () => {
  return (
    <aside className="w-[15%] bg-indigo-500 min-h-screen">
      <nav>
        <ul className="list">
          {navigation.length &&
            navigation.map((item) => (
              <li key={item.id}>
                <NavLink className="item" to={item.path}>
                  <i className={`bi ${item.icon}`}></i>
                  {item.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
      <button onClick={()=>logOut()} className="bg-[#ffffff94] mt-4 rounded py-1 px-4 w-full hover:bg-[#ffffffca] hover:text-indigo-600 active:bg-[#ffffff94] duration-150 text-white">Log Out</button>
    </aside>
  );
};

export default index;
