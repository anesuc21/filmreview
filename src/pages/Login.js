import {useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const email =useRef();
    const password = useRef();

    async function  handleLogin(event) {
        event.preventDefault();
        const authDetail = {
            email: email.current.value,
            password: password.current.value
        }

    const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
        "content-Type": "application/json",
        },
        body: JSON.stringify(authDetail),
    });
    
    const data = await response.json();
    console.log(data);
    data.accessToken ? navigate("/"): toast.error(data);

    if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

        
    }
  return (
    <main>
        <section className ="max-w-7xl mx-auto py-7  ">
            <br/>
            <form onSubmit = {handleLogin} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading dark:text-white">Your email</label>
                <input ref = {email} type="email" id="email" className="bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading dark:text-white">Your password</label>
                <input ref = {password} type="password" id="password" className="bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
            </div>
            <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
            </form>
    </section>
    </main>
  )
};