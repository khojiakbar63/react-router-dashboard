import { useEffect } from "react";
import { Header, Section, Aside, Footer } from "../../components/layouts";
import { Outlet, useHref, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { ToastContainer } from 'react-toastify';
import { ModalStore } from "../../context";
import { states, reducer } from "@/reducer/modal-reducer";
import "./style.scss";

import 'react-toastify/dist/ReactToastify.css';

const index = () => {
  const href = useHref();
  const navigate = useNavigate();

  useEffect(() => {
    let isAuth = localStorage.getItem("token");
    if (!isAuth) {
      navigate("/login");
    }
  }, [href]);

  

  const [{ isOpen }, dispatch] = useReducer(reducer, states);

  const setModal = (arg) => {
    dispatch({ ...arg });
  };
  return (
    <>
      <ModalStore.Provider value={{ isOpen, setModal }}>
        <ToastContainer/>
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
      </ModalStore.Provider>
    </>
  );
};

export default index;
