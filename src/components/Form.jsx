import React, { useState } from "react";
// import bg_img from "../assets/form bg.jpg";
import "../components/form.css";
import logo from "../assets/logo.png";
import axios from "axios";

// import bg from "../form/assets/manstand.png"

function Form() {
  
  const [form, setform] = useState({
    name: "",
    mnumber: "",
    email: "",
    reason: "",
    Amount: "",
    category: "",
    MagerProblem: "",
    bankName: "",
    acNumber: "",
    IFSE: "",
  });
  function changeform(e) {
    setform((provv) => ({ ...provv, [e.target.name]: e.target.value }));
  }

  const handlesubmit = ()=>{
    axios.post("",form)
    .then(res => {console.log(res);})
    .catch(err =>{
      console.log(err);
    })
  }
  // function selectcategory(category) {
  //   setform((provv) => ({ ...provv, category }));
  // }
  return (
    <div className="main flex justify-center h-full mx-[10%] ">
      <div className="form flex w-[100%] justify-center h-[89%]  align-middle rounded-md -mt-10 shadow-2xl ">
        <div className="flex justify-center  w-full mt-10 h-[94%] ">
        <div className="bg-emerald-400 flex flex-col items-center w-[30%] h-[39rem] mt-[4px] -ml-[10%] p-6">
            <img src={logo} width={80} className="mb-4" alt="Logo" />
            <p className="font-bold text-white text-2xl mb-4">Equity Fund</p>
            <p className="text-black font-bold text-xl text-center mt-6 w-full italic">
              <i>"
                Giving is not just about making a donation. It is about making a
                difference
                "
              </i>
            </p>
            <div className="w-full mt-6">
            
            <iframe
      width="290"
      height="315"
      src="https://www.youtube.com/embed/B7H1noB47xs?autoplay=1&loop=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>                                                          



            </div>
          </div>
          <div className="mainform pl-10 h-screen pr-5 pb-10 w-[60%]">
            
            <p className="font-bold flex  justify-center font-serif text-xl">
              Register for fund
            </p><br/>
            <form action=""  onSubmit={handlesubmit} className=" grid grid-cols-2 gap-10">
              <input
                type="text"
                className="p-2 ml-[10%] "
                name="name"
                value={form.name}
                onChange={changeform}
                placeholder="Name"
              />
              <input
                type="number"
                className="p-2 ml-[30%] "
                name="mnumber"
                value={form.mnumber}
                onChange={changeform}
                placeholder="Mobile number"
              />
              <input
                type="text"
                className="p-2  ml-[10%]"
                name="email"
                valuye={form.email}
                onChange={changeform}
                placeholder="Email"
              />

              <input
                type="text"
                name="MagerProblem"
                className="p-2 ml-[30%]"
                value={form.MagerProblem}
                onChange={changeform}
                placeholder="Problem"
              />
              <select className="p-1 ml-[10%] outline-none border border-b-2">
                <option value="Medical">Medical</option>
                <option value="Eadcation">Education</option>
                <option value="Homeless">Homeless</option>
                <option value="Childer">Childeren</option>
                <option value="Pandemic">Pandemic</option>
                <option value="Disaster">Disaster</option>
                <option value="Other">Other</option>

              </select>
              <textarea
                name="reason"
                className="p-2 ml-[30%]"
                placeholder="Details"
              ></textarea>
            </form>
            <br />
            <p className="font-bold flex  justify-center font-serif text-xl">
              Bank details
            </p>
            <br />
            <form className="grid grid-cols-2 gap-10">
              <input
                type="text"
                name="bankName"
                className="p-2  ml-[10%]"
                value={form.bankName}
                onChange={changeform}
                placeholder="Bank Name"
              />
              <input
                type="Number"
                name="acNumber"
                className="p-2  ml-[30%]"
                value={form.acNumber}
                onChange={changeform}
                placeholder="Account Number"
              />
              <input
                type="text"
                name="IFSE"
                className="border-b-2 border-gray-450 p-2 ml-[10%]"
                value={form.IFSE}
                onChange={changeform}
                placeholder="IFSE code"
              />
              <input
                type="number"
                className="border-b-2 border-gray-450  p-2 ml-[30%]"
                name="Amount"
                value={form.Amount}
                onChange={changeform}
                placeholder="Amount"
              />

              <input
                type="file"
                className="border-0 border-gray-450 p-2 ml-[10%]"
                placeholder="Enter the Photo"
              />
              <input
                type="submit"
                className="bg-black text-white m active: rounded-md py-3"
              />
              <br />
              
            </form>
          </div>
        </div>
      </div>
      {/* footer */}
      {/* <div className="footer flex justify-center">
        <div className="par">
          <p>Donate for a Save a life</p>
        </div>
        <div className="btn bg-orange-500 dot">Donate</div>
      </div> */}
    </div>
  );
}
export default Form;