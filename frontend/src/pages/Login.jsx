// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { loginUser } from "../api/authApi";

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
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
//       const data = await loginUser(formData);

//       localStorage.setItem("access", data.access);
//       localStorage.setItem("refresh", data.refresh);

//       toast.success("Welcome back!");
//       navigate("/dashboard");
//     } catch {
//       toast.error("Invalid Credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0B1220] relative overflow-hidden">

//       {/* background glow */}
//       <div className="absolute w-[500px] h-[500px] bg-blue-600/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
//       <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

//       {/* Card */}
//       <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">

//         {/* Header */}
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-white">
//             AI Social Analytics
//           </h1>
//           <p className="text-gray-400 mt-2 text-sm">
//             Sign in to analyze sentiment, trends & insights
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">

//           {/* Username */}
//           <div>
//             <label className="text-sm text-gray-300">Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Enter your username"
//               onChange={handleChange}
//               className="mt-1 w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="text-sm text-gray-300">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               onChange={handleChange}
//               className="mt-1 w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </div>

//           {/* Button */}
//           <button
//             className="w-full py-3 rounded-xl font-semibold text-white
//             bg-gradient-to-r from-cyan-500 to-blue-600
//             hover:opacity-90 hover:scale-[1.02] transition"
//           >
//             Sign In
//           </button>
//         </form>

//         {/* Footer */}
//         <div className="mt-6 text-center text-sm text-gray-400">

//           <p>
//             New here?{" "}
//             <span
//               onClick={() => navigate("/register")}
//               className="text-cyan-400 cursor-pointer hover:underline"
//             >
//               Create account
//             </span>
//           </p>

//           <p className="mt-2 text-xs text-gray-500">
//             Powered by AI Sentiment Engine
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { loginUser } from "../api/authApi";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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
      const data = await loginUser(formData);

      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1220] relative overflow-hidden">

      {/* Background Glow Animation */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-600/30 blur-3xl rounded-full top-[-120px] left-[-120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]"
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold text-white">
            AI Social Analytics
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Analyze sentiment, trends & insights in real time
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="text-sm text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              className="mt-1 w-full p-3 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-cyan-500 to-blue-600"
          >
            Sign In
          </motion.button>
        </form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center text-sm text-gray-400"
        >
          <p>
            New here?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-cyan-400 cursor-pointer hover:underline"
            >
              Create account
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;