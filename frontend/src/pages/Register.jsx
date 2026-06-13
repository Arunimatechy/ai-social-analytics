// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { registerUser } from "../api/authApi";

// function Register() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await registerUser(formData);

//       toast.success("Registration Successful");

//       navigate("/");
//     } catch {
//       toast.error("Registration Failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

//       {/* Card */}
//       <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-center text-white mb-2">
//           Create Account 🚀
//         </h1>

//         <p className="text-center text-gray-300 mb-6">
//           Join AI Analytics Platform
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">

//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <button
//             className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-lg font-semibold hover:scale-[1.02] transition"
//           >
//             Register
//           </button>

//         </form>

//         {/* Bottom Links */}
//         <div className="text-center mt-6 text-gray-300 text-sm">
//           <p>
//             Already have an account?{" "}
//             <span
//               onClick={() => navigate("/login")}
//               className="text-green-400 cursor-pointer hover:underline"
//             >
//               Login
//             </span>
//           </p>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Register;




import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../api/authApi";
import { motion } from "framer-motion";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(formData);
      toast.success("Registration Successful");
      navigate("/");
    } catch {
      toast.error("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1220] relative overflow-hidden">

      {/* Background glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-emerald-600/25 blur-3xl rounded-full top-[-120px] left-[-120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-green-500/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl"
      >

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            AI Social Analytics
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Create your account to start analyzing insights
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-sm text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-emerald-500 to-green-600"
          >
            Create Account
          </motion.button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-emerald-400 cursor-pointer hover:underline"
            >
              Sign in
            </span>
          </p>
        </div>

      </motion.div>
    </div>
  );
}

export default Register;