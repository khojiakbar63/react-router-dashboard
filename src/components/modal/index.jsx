import { useContext, useReducer } from "react";
import { Button } from "@ui";
import { Input } from "@components/form";
import { ModalStore } from "@/context";
import { customerStates, reducer } from "@/reducer/customer-reducer";
import { leadsAPI } from "@service/leads";
import "./style.scss";
import { stringify } from "postcss";

const index = ({ title }) => {

async function useFetch(){
    const newObject = {
        customer: name,
        email,
        phone,
        status: false,
        id: String(Date.now())
    }

    if(
        newObject.customer.trim().length === 0 ||
        newObject.email.trim().length === 0 ||
        newObject.phone.trim().length === 0
        ){
        alert('Please fill all. the fields.')
    } else{
        try{
            const response = await leadsAPI.create(newObject)
            if(response.status === 201){
                setModal({type: "CLOSE"})
                window.location.reload()
            }
        }
        catch(err){
            console.log(err);
        }
    }

}

  const [{ name, email, phone }, dispatch] = useReducer(
    reducer,
    customerStates
  );

  const { isOpen, setModal } = useContext(ModalStore);
  const modalStyle = {
    display: isOpen ? "grid" : "none",
  };

  return (
    <div style={modalStyle} className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          {title}
          <button
            onClick={() => setModal({ type: "CLOSE" })}
            className="text-2xl bg-red-400 hover:bg-red-300 active:bg-red-500 duration-0 grid place-content-center w-6 h-6 p-0 pb-1"
          >
            x
          </button>
        </div>
        <div className="modal-body grid place-content-center">
          <Input 
          onChange={(val)=>dispatch({type: "UPDATE_NAME", payload:val})}
          value={name} 
          type="text" 
          placeholder="Name" />
          <Input
          onChange={(val)=>dispatch({type:"UPDATE_EMAIL", payload:val})} 
          value={email} 
          type="email" 
          placeholder="Email" />
          <Input
          onChange={(val)=>dispatch({type:"UPDATE_PHONE", payload:val})} 
          value={phone} 
          type="tel" 
          placeholder="Phone number" />
        </div>
        <div className="modal-footer">
          <button
            onClick={() => setModal({ type: "CLOSE" })}
            className="bg-red-500 hover:bg-red-600 active:bg-red-700 duration-0"
          >
            Cancel
          </button>
          <Button
            fun={()=>useFetch()}
            text="Create"
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 duration-0"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
