import { useEffect } from "react";
import { Header, Section, Aside, Footer } from "../../components/layouts";
import { Outlet, useHref, useNavigate } from "react-router-dom";
import "./style.scss";

const index = () => {
  const href = useHref();
  const navigate = useNavigate()
  console.log(href);
  useEffect(() => {
    let isAuth = localStorage.getItem("token");
    if (!isAuth) {
        navigate("/login");
    }
  }, [href]);
  return (
    <div>
      <Header />

      <Section className="flex">
        <Aside />
        <Section className="p-2">
          <div className="border border-indigo-400 border-dashed p-4 rounded-lg">
            <Outlet />
          </div>
        </Section>
      </Section>

      <Footer />
    </div>
  );
};

export default index;
