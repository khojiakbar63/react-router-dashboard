import { useReducer, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { leadsAPI } from "@/service/leads";
import { toast } from 'react-toastify';
import { Loader, DataTable, Button, Modal } from "@components/ui";
import { Input } from "../../components/form";
import { ModalStore } from "@/context";
import {states, reducer} from '@reducer/lead-reducer'
import "./style.scss";

const index = () => {

  const back = useNavigate()
  const {setModal} = useContext(ModalStore)
  // States
 
  async function deleteLead(id) {

    try{
      const response = await leadsAPI.delete(id)

      if(response.status === 200) {
        useFetch()
        toast.error('Lead deleted successfully!',  {autoClose:  1000})
      }
    }catch(err){
      console.log(err);
    }
  }
  // Gluing States with Reducer
  const [{ leads, loading, status }, dispatch] = useReducer(
    reducer,
    states
  );

  // UseFetch
  const useFetch = async () => {
    dispatch({ type: "LOADING_START" });
    try {
      const response = await leadsAPI.getAll();
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data });
        dispatch({ type: "LOADING_STOP" });
      }
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
      dispatch({ type: "LOADING_STOP" });
      console.log(err);

    }
  };

  // Side Effects
  useEffect(() => {
    useFetch();
  }, []);

  // Change Status
  const changeStatus = async(id)=>{
    try{
      const response = await leadsAPI.update(id, {status: true})
      if(response.status === 200){
        useFetch()
          toast.success('Lead completed successfully!',  {autoClose:  1000})
      }
    }
    catch(err){
      console.log(err);
    }
  
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>

        <Modal title="Create Lead" />
        <div className="p-4 flex justify-between items-center bg-slate-300 rounded-2xl mb-4">
          <Button fun={()=>back(-1)} text="Return" />
          <form action="#">
            <Input type="search" placeholder="Search" />
          </form>
          <Button fun={()=>setModal({type:"OPEN"})} text="Create Lead" />
        </div>

        {status === "success" && <DataTable data={leads} deleteItem={deleteLead} changeStatus={changeStatus}/>}

    </>
  );
};

export default index;
