import "./style.scss";
import { navigation } from "@/mocks/navigation";
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
    </aside>
  );
};

export default index;
