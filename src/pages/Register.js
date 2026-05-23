export const Register = () => {
  return (
    <main>
        <section className="max-w-7xl mx-auto py-7">
        <br/>
        <form className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
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

            {/* FIRST + LAST NAME */}
            <div className="grid md:grid-cols-2 gap-5">

                <div>
                <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    First Name
                </label>

                <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John"
                    required
                />
                </div>

                <div>
                <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Last Name
                </label>

                <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Doe"
                    required
                />
                </div>

            </div>

            {/* PHONE + COMPANY */}
            <div className="grid md:grid-cols-2 gap-5 mt-5">

                <div>
                <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Phone Number
                </label>

                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123-456-7890"
                    required
                />
                </div>

                <div>
                <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-700"
                >
                    Company
                </label>

                <input
                    type="text"
                    name="company"
                    id="company"
                    className="block w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Google"
                    required
                />
                </div>

            </div>

            {/* TERMS */}
            <div className="flex items-center mt-6 mb-6">
                <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
                />

                <label
                htmlFor="remember"
                className="ms-2 text-sm text-gray-700"
                >
                I agree to the terms and conditions
                </label>
            </div>

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
