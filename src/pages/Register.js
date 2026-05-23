import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigate = useNavigate();

    async function handleRegister(event) {
    event.preventDefault();

    const authDetail = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
    };

    const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
        "content-Type": "application/json",
        },
        body: JSON.stringify(authDetail),
    });

    const data = await response.json();
    data.accessToken ? navigate("/"): toast.error(data);
    console.log(data);
}
  return (
    <main>
        <section className="max-w-7xl mx-auto py-7">
        <br/>
        <form onSubmit = {handleRegister} className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
            {/* Name */}
            <div className="mb-5">

                <div>
                <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John"
                    required
                />
                </div>
            </div>
            
            
            {/* EMAIL */}
            <div className="mb-5">
                <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                Email address
                </label>

                <input
                type="email"
                name="email"
                id="email"
                className="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@example.com"
                required
                />
            </div>

            {/* PASSWORD */}
            <div className="mb-5">
                <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                Password
                </label>

                <input
                type="password"
                name="password"
                id="password"
                className="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
                />
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="mb-5">
                <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-700"
                >
                Confirm Password
                </label>

                <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                className="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
                />
            </div>


            
            <br />

            {/* BUTTON */}
            <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-3 focus:outline-none transition"
            >
                Submit
            </button>

            </form>
                        
        </section>
    </main>
  )
}
