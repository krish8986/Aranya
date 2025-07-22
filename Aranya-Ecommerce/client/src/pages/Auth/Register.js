import React,{ useState } from "react"
import Layout from "../../components/Layouts/Layout";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
    const [name,setName] = useState("");
    const [email,setemail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate()

    //form function---
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/Register`,
                { name, email, password, phone, address, answer }
            );
            if(res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            }else{
             toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error("something went wrong");
        }
    };

    return (
        // <Layout title=" Business Inquiry - Aranya">
        <Layout
  title={"Login/Register | Aranya"}
  description={"Login or create your Aranya account for easy shopping of eco-friendly products."}
  keywords={"login aranya, register aranya, eco-friendly shopping"}
  author={"Krishna Kumar"}
>

            <div className=" form-container ">
             <form onSubmit={handleSubmit}>
              <h4 className="title">Business Inquiry Register</h4>
              <div class="mb-3">
               <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" placeholder="Name" required />
            </div> 
            <div class="mb-3">
             <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-Mail" required/>
            </div>
            <div class="mb-3">
             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
            </div>
            <div class="mb-3">
             <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Phone" required/>
            </div>
            <div class="mb-3">
             <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Address" required/>
            </div>
            <div class="mb-3">
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputName" placeholder="What is your favorite sports?" required />
            </div>
           <button type="submit" class="btn btn-primary">Send</button>
         </form> 
            </div>
        </Layout>
    );
};

export default Register;
