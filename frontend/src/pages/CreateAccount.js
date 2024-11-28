import favicon from "../assets/blue-berry-new.png"; // Adjust the path as per your folder structure
import Navbar from "../components/Navbar";

function CreateAccount() {
    return (
        <>
        <Navbar />
        <div class="flex min-h-screen">
            {/* Left Section */}
            <div class="w-1/2 flex justify-center items-center bg-customWhite min-h-screen">
                {/* Outer Container */}
                {/* <div class="bg-white border border-customLiteBlue p-8 rounded-lg shadow-lg w-full max-w-md"> */}
                    

                    {/* Form */}
                    <form class="rounded-lg shadow-lg space-y-2 border border-customLiteBlue p-8 w-1/2">
                        {/* Heading */}
                        <h1 class="text-center text-2xl font-bold pb-1 text-black">
                            Create your account
                        </h1>
                        {/* Full Name */}
                        <div>
                            <label class="block font-medium mb-2">Full Name:</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customBlue"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label class="block font-medium mb-2">Email:</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customBlue"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label class="block font-medium mb-2">Password:</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customBlue"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label class="block font-medium mb-2">Confirm Password:</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customBlue"
                            />
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label class="block font-medium mb-2">Date of Birth:</label>
                            <input
                                type="date"
                                class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customBlue"
                            />
                        </div>

                        {/* Sign Up Button */}
                        <div class="flex justify-center items-center">
                            <button type="submit" class="bg-customBlue text-white 
                                py-2 px-6 rounded font-bold hover:shadow-md">
                                Sign Up
                            </button>
                        </div>
                    </form>
                {/* </div> */}
            </div>
            {/* Right Section */}
            <div class="w-1/2 bg-customLiteBlue flex flex-col min-h-screen justify-center items-center">
                <img class="object-cover" src={favicon} alt="Cherries" />
                <div class="flex justify-between w-30">
                    <img class="" src={favicon} alt="Cherries" />
                    <img class="" src={favicon} alt="Cherries" />
                </div>
            </div>
        </div>
        </>
    );
}

export default CreateAccount;
