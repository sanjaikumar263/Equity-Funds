import React, { useEffect, useState } from 'react'
import Login_bg from '../assets/Login_bg.jpg'
import Login_log from '../assets/imag_1.png'
import { MdAttachEmail } from "react-icons/md";//MAIL-ICON
import { FaMobileAlt } from "react-icons/fa";//MOBILE-ICON
import { FaEye } from "react-icons/fa";//EYE-OPEN-ICON
import regist_2 from "../assets/image2.png"




const UserLogin = () => {
  
  const [c1, setc1] = useState('hidden')
  const [c2, setc2] = useState('hidden')
  const [b1, setb1] = useState('')
  const [b2, setb2] = useState('')
  const [isFlexRowReverse, setIsFlexRowReverse] = useState("");
  const [first ,setfirstname]=useState('')
  const [last ,setlastname]=useState('')
  const [email ,setemail]=useState('')
  const [mobile ,setmobile]=useState('')
  const [password ,setpassword]=useState('')
  const [cpassword ,setcpassword]=useState('')
  const [isPasswordVisible,setisPasswordVisible]=useState(false)

  




  //  const handleloginsubmit=()=>{
  //   console.log("login clicked")
  //   setIsFlexRowReverse(isFlexRowReverse === 'flex-row-reverse' ? '' : 'flex-row-reverse')

  //   setTimeout(() => {
  //     setb2(b2 === '' ? 'hidden' : '');
      
  //     setc1(c1 === 'hidden'? '' : 'hidden');
  //     setc2(c2 === 'hidden' ? '' : 'hidden');
  //   }, 1000);
  



  //  }


    const Sub=()=>{
      
      


    }



    const handleonsubmit=()=>{
      console.log("signup working");

      setIsFlexRowReverse(isFlexRowReverse === '' ? 'flex-row-reverse' : '')
     

    
    
    
      
    setTimeout(() => {
      setb2(b2 === '' ? 'hidden' : '');
      setb1(b1 === '' ? 'hidden' : '')
      setc1(c1 === 'hidden'? '' : 'hidden');
      setc2(c2 === 'hidden' ? '' : 'hidden');
      setIsFlexRowReverse('')
    }, 1000);
  
      


  
   

    }
    




  return (
    <div class="relative flex">
    <img class="h-screen w-screen object-cover blur-sm" src={Login_bg} alt="Login_bg" />

    <div class="absolute inset-0 flex items-center justify-center ">
        <div  class={`flex ${isFlexRowReverse} Sign  main-Box content-center justify-center space-x-0.5 bg-emerald-500`}>
          {/* First Div */}
          <div>
            {/* underLay-form-SigIN  */}
            <div  style={{width: '33rem', height: '32rem' }} class={`${b1} b1   size-96 bg-white w-screen  border-1 border-black rounded-lg p-4 -mr-2`}>
            <div className='grid grid-rows-1 place-items-center w-full'>
              <h2 className='text-2xl'>Sign in</h2><br/>
              <form className='flex flex-col justify-center items-center space-y-2 ' onSubmit={()=>Sub()}>
                <span className='flex  justify-center items-center  space-x-2'>
              <input className='placeholder-gray  rounded p-2 bg-gray-300 w-[25%]' type='text' placeholder='First Name' onChange={(e)=>setfirstname(e.target.value)} value={first} />
              <input className='placeholder-gray rounded p-2 bg-gray-300 w-[25%] ' type='text' placeholder='Last Name' onChange={(e)=>setlastname(e.target.value)} value={last} />
              </span>
              <div className="relative w-[52%]">
        <MdAttachEmail className="absolute left-2 top-3.5 text-gray-400" />
        <input
          className="placeholder-gray rounded pl-8 p-2 bg-gray-300 w-full"
          type="text"
          placeholder="Email"
          onChange={(e)=>setemail(e.target.value)}
          value={email}
        />
      </div>
      <div className="relative w-[52%]">
      <FaMobileAlt className='absolute left-2 top-3.5 text-gray-400' />
              <input className='pl-8 placeholder-gray rounded p-2 bg-gray-300 w-full' type='tel' placeholder='Mobile Number' onChange={(e)=>setmobile(e.target.value)}  value={mobile}/>
        </div>  
              <div className="relative w-[52%]">
              <FaEye className='absolute left-2 top-3.5 text-gray-400' onClick={()=>setisPasswordVisible(!isPasswordVisible)}/>
                <input className='placeholder-gray rounded pl-8 p-2 bg-gray-300 w-full' type={`${isPasswordVisible ? 'text' : 'password'}`} placeholder='Password' onChange={(e)=>setpassword(e.target.value)}  value={password}/>
              </div>
              <input className='placeholder-gray rounded p-2 bg-gray-300 w-[52%]' type='text' placeholder='Confirm Password' onChange={(e)=>setcpassword(e.target.value)} value={cpassword}/><br/>
              <span className='flex justify-center items-center space-x-2 '>
                <input type='checkbox' className=''/><p>I agree the Team and Condition of the company<span>...</span></p>
              </span>
              <button className='bg-emerald-500 text-white h-10 w-[25%] rounded active:scale-125' type='submit'  >Sign up</button>

              </form>
              

            </div>
            </div>
            {/* OverLay-form */}
             <div  style={{width: '33rem', height: '32rem' }} class={`${c2} c2   size-96 bg-emerald-500 w-screen  border-1 border-black rounded-lg p-4 -mr-2`}>
                <div className='grid grid-rows-1 gap-2 place-items-center  w-100%'>
                  <img className='h-[11rem] md:w-32 lg:w-48 ' src={Login_log} alt='Login_log'/>
                  <br/>
                  <h2 className='items-center text-3xl font-medium'>Create a New Account </h2>
                  <p className='text-sm font-medium italic'>Give your hands to support to other from the Not part of there life.</p>
               {/* Sign In  */}
                <input type='button' style={{backgroundColor:"#EFA457"}} className=' text-white border-2 w-[25%] rounded ' onClick={()=>handleonsubmit()} value="Sign Up"/>
               
                </div>
             </div> 
            </div>
            {/* second div */}
            {/* Over-lay-Registration */}
            <div>
             <div  style={{width: '33rem', height: '32rem'}} className={`${b2}  b2  size-96 bg-emerald-500  border-1 border-black rounded-lg p-4 -ml-2 `}>
                <div className='flex flex-col space-y-4  justify-center items-center w-full'>
                  <img className='size-48'  src={regist_2} alt='Register_log'/>
                  <h2 className=' text-3xl' > Existing user</h2>
                  <p className='text-sm italic'>Give Your hands to support to other from the Not part of there life</p>
                  <input type='button'  style={{backgroundColor:"#EFA457"}} className='bg-white text-white border-2 h-10 w-[24%] rounded active:scale-125' value="Sign In" onClick={()=>handleonsubmit()}/>
                
                </div>
             </div>

            </div>
            {/* underLay-Login */}
             <div  style={{width: '33rem', height: '32rem'}} class={`${c1}  c1 size-96 bg-white border-1 border-black rounded-lg p-4 -ml-2`}>
               <div className='grid grid-cols-1 content-center w-full  h-full p-8'>
                <div className='flex justify-center items-center'>
                <form class="flex flex-col items-center space-y-4  ">
                            <h4 class="text-lg font-bold ">LOGIN</h4>
                            <input type="email" placeholder="Email" class="p-2 border bg-gray-300 rounded w-64" onChange={(e)=>setemail(e.target.value)} value={email}/>
                            <input type="password" placeholder="Password" class="p-2 border  bg-gray-300 rounded w-64"  onChange={(e)=>setpassword(e.target.value)} value={password}/>
                            <button type="submit" class="p-2 bg-emerald-500 text-white rounded w-[35%] active:scale-125 " >Login</button>
                        </form>

                </div>
               
               </div>
            </div> 
        </div>
    </div>
</div>
  )
}


const Term = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-screen relative flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="w-[50%] h-[50%] bg-white absolute p-4 overflow-y-auto shadow-lg">
          <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
          <p>
            Welcome to the Equity Funds Crowdfunding Campaign. By participating
            in this campaign, you agree to be bound by the following terms and
            conditions. Please read them carefully.
          </p>
          <p>
            <strong>1. Introduction</strong><br />
            Welcome to the Equity Funds Crowdfunding Campaign. By participating in this campaign, you agree to be bound by the following terms and conditions. Please read them carefully.
          </p>
          <p>
            <strong>2. Definitions</strong><br />
            - <strong>Campaign:</strong> The Equity Funds Crowdfunding Campaign.<br />
            - <strong>Platform:</strong> The website or service hosting the Equity Funds Crowdfunding Campaign.<br />
            - <strong>Investor:</strong> Any individual or entity participating in the Campaign by providing funds.<br />
            - <strong>Project:</strong> The business or venture being funded through the Campaign.<br />
            - <strong>Equity:</strong> The ownership interest in the Project provided to Investors in exchange for their investment.
          </p>
          {/* Add more terms and conditions content here */}
        </div>
      )}
      <p className="text-gray-700">Hover over this text to see the terms and conditions</p>
    </div>
  );
};





export default UserLogin