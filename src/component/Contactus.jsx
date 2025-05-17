import React, { useContext, useState } from 'react'
import Head from './Head';
import Footer from './Footer';
import AppContext from '../Context/AppContext';

const Contactus = () => {
  

     const [nm,setNm] = useState("")
      const [em,setEm] = useState("")
      const [sub,setSub] = useState("")
      const [msg,setMsg] = useState("")
      const [ph , setPh] = useState("")
      const {addContact,} = useContext(AppContext);

      const f1 = (a)=>{
         console.log("Start function");
        a.preventDefault();
        console.log({nm,em,sub,msg,ph})

        addContact(nm, em, ph, msg, sub)
        .then((response) => {
          alert("Message sent successfully!"); // or toast
          setNm(""); setEm(""); setMsg(""); setPh(""); setSub("");
        })
        .catch((error)=>{
            console.log("Registration error",error)
        });
    }


    const info = [
        { id: '01', title: 'Visit Feedback' },
        { id: '02', title: 'Employer Services' },
        { id: '03', title: 'Billing Inquiries' },
        { id: '04', title: 'General Inquiries' }
      ];
  return (
   <>
   <Head/>
   <h3 className='fs-6 text-blue-300 ms-2'>Home <span className='text-green-600'>{">"}</span> Contact Us</h3> <hr />
   <div className="px-6 py-16 bg-white text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h3 className="text-green-600 text-lg font-semibold">How can help you ?</h3>
        <h2 className="text-3xl font-bold mt-2 mb-6 max-w-xl">Let us know how we can help you</h2>
        <p className="text-gray-600 mb-2 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        {/* Info Blocks */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {info.map((item, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-1 text-green-600">{item.id}. {item.title}</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {info.map((item, idx) => (
    <div 
      key={idx} 
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <h4 className="font-bold mb-2 text-green-600 text-lg">
        {item.id}. {item.title}
      </h4>
      <p className="text-gray-600 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>
  ))}
</div>

      </div>

      {/* Map Section */}
     
 
  <div className=" ">
    <iframe
      className="rounded-lg"
      style={{ height: "300px", width: "100%" }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.480343203606!2d-0.37817799424546056!3d51.514248805889485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766b81f379db89%3A0xab69f844e9ae9f36!2sSlough!5e0!3m2!1sen!2sin!4v1713855292942"
      loading="lazy"
    ></iframe>
  </div>
 



      {/* About Company Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 ">
        {[1, 2, 3].map((_, idx) => (
          <div key={idx}>
            <h4 className=" fs-3 mb-3" style={{color:"#3BB77E"}}>About Company</h4>
            <p className="mb-2">
              📍 <span className="font-semibold">Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States
            </p>
            <p className="mb-2">
              📞 <span className="font-semibold">Call Us:</span> (+91)-540-025-124553
            </p>
            <p className="mb-2">
              📧 <span className="font-semibold">Email:</span> sale@Nest.com
            </p>
            <p className="mb-4">
              🕒 <span className="font-semibold">Hours:</span> 10:00 - 18:00, Mon - Sat
            </p>
            <button className="text-white px-4 py-2 rounded hover:bg-green-700" style={{backgroundColor:"#3BB77E"}}>
              📍 View Map
            </button>
          </div>
        ))}
      </div>
    </div>
   
   {/* Form section */}
   <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-10 lg:px-20 gap-10 ms-5">
      {/* Form Section */}
      <div className="w-full lg:w-1/2">
        <p className="text-green-600 font-semibold text-3xl">Contact form</p>
        <h2 className="text-xl font-bold mb-2">Drop Us a Line</h2>
        <p className="text-gray-600 mb-6">
          Your email address will not be published. Required fields are marked *
        </p>

        <form onSubmit={f1} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={nm} onChange={(e)=>setNm(e.target.value)}
              placeholder="First Name"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              value={em} onChange={(e)=>setEm(e.target.value)}
              placeholder="Your Email"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={sub} onChange={(e)=>setSub(e.target.value)}
              placeholder="Subject"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={ph} onChange={(e)=>setPh(e.target.value)}
              placeholder="Your Phone"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md"
            />
          </div>

          <textarea
            placeholder="Message"
            value={msg} onChange={(e)=>setMsg(e.target.value)}
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-md"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/contact-2-min.png"
          
          className="rounded-xl  object-cover" style={{height:"278" , width:"274"}}
        />
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default Contactus