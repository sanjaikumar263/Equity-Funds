import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import QrCode from 'react-qr-code';
import { Link } from 'react-router-dom';

const Payment = () => {
    const [showoptions, setoptions] = useState('bankdetail')

    const handleOnchange=(e)=>{
        setoptions(e)
        
    }
    
    const show = () => {
        
            switch (showoptions) {
                case 'bankdetail':
                  return <Bankdetail />;
                case 'netbanking':
                   return <Netbanking />;
                 case 'debitcard':
                   return <Debitcard />;
                 case 'creditcard':
                   return <Creditcard />;
                 case 'upi':
                   return <Upi />;
                 case 'qr':
                   return <Qr />;
                default:
                  return <Bankdetail />;
              }
               
    }

  return (
    // main div
    <div className='w-100%'>
        {/* main-inner-div */}
    <div className='w-[100%] grid grid-cols-5'>
        {/* left-first-div */}
        <div className='grid  gap-y-6 p-4'>
            {/* left-sub-div */}
            <button onClick={()=>handleOnchange("bankdetail")}>
             <div style={{padding:'18px', borderBottom:"4px solid #b3a4a4",borderLeft:"3px solid #b4a2a2"}} className='  rounded-bl-xl text-3xl '> 
                <p>
                    Bank details
                </p>
            </div>
            </button>
            <button onClick={()=>handleOnchange("netbanking")}>
            <div style={{padding:'8px',borderBottom:"4px solid #b3a4a4",borderLeft:"3px solid #b4a2a2"}} className='  rounded-bl-xl text-3xl '>
                <p>
                    Net-Banking
                </p>
            </div>
            </button>
            <button onClick={()=>handleOnchange("debitcard")}>
            <div style={{padding:'8px',borderBottom:"4px solid #b3a4a4",borderLeft:"3px solid #b4a2a2"}} className='  rounded-bl-xl text-3xl '>
                <p>
                    Debit Card
                </p>
            </div>
            </button>
            <button onClick={()=>handleOnchange("creditcard")}>
            <div style={{padding:'8px',borderBottom:"4px solid #b3a4a4",borderLeft:"3px solid #b4a2a2"}} className='  rounded-bl-xl text-3xl '>
                <p>
                    Credit Card
                </p>
            </div>
            </button>
            <button onClick={()=>handleOnchange("upi")}>
            <div style={{padding:'8px',borderBottom:"4px solid #b3a4a4",borderLeft:"3px solid #b4a2a2"}} className='  rounded-bl-xl text-3xl '>
                <p>
                    Upi
                </p>
            </div>
            </button>
            <button onClick={()=>handleOnchange("qr")}>
            <div style={{padding:'8px',borderBottom:"4px solid #b3a4a4",borderLeft:"3px solid #b4a2a2"}} className='  rounded-bl-xl text-3xl '> 
                <p>
                    QR Code
                </p>
            </div>
            </button>
          





        </div>

       
      
        {/* right-div */}
        <div className='col-span-4 border-2 border-black h-screen w-full'>
       
         
          {
            show()
          }
          






























         


        </div>












    </div>









 {/* end-main-div */}
    </div>
  )
}










const Bankdetail = () => {
   
  return (
   
            
    
    <div>
        {
             
             console.log("bankdetails clicked")
           
             
         
     }
         {/* BANK-DETAILS */}
         <div className=' text-2xl'>
         <h3 align='center' className=''>BANK DETAILS</h3>
      {/* Details-div */}
      <div className='grid grid-cols-1 gap-y-2 pl-4'>
        <div className='flex justify-between border-[1px] p-2'>
          <span>ACCOUNT HOLDER NAME :</span>
          <span>jervin jose a.l</span>
        </div>
        <div className='flex justify-between border-[1px] p-2'>
          <span>ACCOUNT NO :</span>
          <span>5000020200202020</span>
        </div>
        <div className='flex justify-between border-[1px] p-2'>
          <span>Bank :</span>
          <span>HDFC</span>
        </div>
        <div className='flex justify-between border-[1px] p-2'>
          <span>IFSC NO :</span>
          <span>HDCO00719</span>
        </div>
        <div className='flex justify-between border-[1px] p-2'>
          <span>Account type :</span>
          <span>SAVING</span>
        </div>
      </div>
      </div>
    </div>
  )
}



const Netbanking = () => {
  return (
    // main div
    <div className='flex flex-col items-center justify-center min-h-screen  bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
        <h1 align='center' className='text-3xl mb-6'>NET BANKING</h1>
        <form className='flex flex-col space-y-4'>
          <div className='flex flex-col'>
            <label className='mb-2 text-lg'>CUSTOMER ID/USER ID:</label>
            <input 
              type='text' 
              placeholder='ENTER YOUR ID..' 
              className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500'
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-lg'>Select Bank:</label>
            <select className='border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500'>
              <option value='Axis'>Axis</option>
              <option value='CityUnionBank'>CityUnionBank</option>
                <option value='Indian'>Indian</option>
              <option value='HDFC'>HDFC</option>
              <option value='SBI'>SBI</option>
              <option value='Kotak'>Kotak</option>
              <option value=''>HDFC</option>
            </select>
          </div>
          <button 
            type='submit' 
            className='bg-emerald-500 text-white py-2 rounded-md shadow-lg hover:bg-emerald-600'
          >
            LOGIN..
          </button>
        </form>
      </div>
    </div>
  )
}







const Debitcard = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState('');
  const [view, setView] = useState('home');

  useEffect(() => {
    setCards([
    {
        id: '1',
        cardName: 'Axis master card'}
    ]);
  }, []);

  const handleAddCard = () => {
    if (newCard.trim() !== '') {
      const newCardEntry = {
        id: new Date().getTime().toString(),
        cardName: newCard
      };
      setCards([...cards, newCardEntry]);
      setNewCard(''); 
      setView('home');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      {view === 'home' ? (
        <div className='w-full h-full max-w-md p-8 bg-white rounded-lg shadow-md'>
          <h1 className='text-3xl mb-6 text-center'>Your Cards</h1>
          {cards.length > 0 ? (
            <div className='grid grid-cols-1 gap-4'>
              {cards.map(card => (
                <div key={card.id} className='border p-4 rounded-md shadow-sm'>
                  <p className='text-xl'>{card.cardName}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center text-xl mb-6'>No card exists</div>
          )}
          <button
            onClick={() => setView('add')}
            className='bg-emerald-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-emerald-600 mt-6'
          >
            Add New Card
          </button>
        </div>
      ) : (
        <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
          <h1 className='text-3xl mb-6 text-center'>Add a New Card</h1>
          <input
            type='text'
            value={newCard}
            onChange={e => setNewCard(e.target.value)}
            placeholder='Enter new card name'
            className='border rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500'
          />
          <button
            onClick={handleAddCard}
            className='bg-emerald-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-emerald-600'
          >
            Add Card
          </button>
          <button
            onClick={() => setView('home')}
            className='bg-gray-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-gray-600 mt-4'
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};






const Creditcard = () => {


    const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState('');

//   useEffect(() => {
 
    // fetch('/api/cards') 
    //   .then(response => response.json())
    //   .then(data => setCards(data))
    //   .catch(error => console.error('Error fetching cards:', error));
//   }, []);

  const handleAddCard = () => {
    
    // const updatedCards = [...cards, { id: cards.length + 1, cardName: newCard }];
    // setCards(updatedCards);
    // setNewCard('');
  };




  return (
    <div>
        <div>
             <div className='flex flex-col items-center justify-center min-h-screen p-4  bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
        <h1 className='text-3xl mb-6 text-center'>Your Cards</h1>
        {cards.length > 0 ? (
          <div className='grid grid-cols-1 gap-4'>
            {cards.map(card => (
              <div key={card.id} className='border p-4 rounded-md shadow-sm'>
                <p className='text-xl'>{card.cardName}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center text-xl mb-6'>No card exists</div>
        )}
        <div className='flex flex-col items-center mt-6'>
          <input
            type='text'
            value={newCard}
            onChange={e => setNewCard(e.target.value)}
            placeholder='Enter new card name'
            className='border rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500'
          />
          <button
            onClick={handleAddCard}
            className='bg-emerald-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-emerald-600'
          >
            Add New Card
          </button>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}





const Upi = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
    <h1 className='text-3xl font-bold mb-8'>UPI</h1>
    <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
      <h2 className='text-2xl font-semibold mb-4 text-center'>UPI Methods</h2>
      <ul className='grid grid-cols-1 gap-4'>
        <li className='p-4 border rounded-md shadow-sm text-center relative overflow-hidden wave-hover'>GPay</li>
        <li className='p-4 border rounded-md shadow-sm text-center relative overflow-hidden wave-hover'>PhonePe</li>
        <li className='p-4 border rounded-md shadow-sm text-center relative overflow-hidden wave-hover'>Paytm</li>
      </ul>
    </div>
  </div>
  )
}







const Qr = () => {
  return (
    <div className='flex items-center justify-center min-h-screen  bg-gray-100'>
        <QrCode
         size={400}
         bgColor='white'
         fgColor='black'
         value='hello'
         />

    </div>
  )
}






















export default Payment