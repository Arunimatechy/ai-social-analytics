// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import DashboardLayout from "../components/DashboardLayout";
// import api from "../api/axios";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//   });

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const token = localStorage.getItem("access");

//       const res = await api.get("/profile/", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setUser(res.data);

//       setForm({
//         username: res.data.username || "",
//         email: res.data.email || "",
//       });
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to load profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUpdate = async () => {
//     try {
//       const token = localStorage.getItem("access");

//       await api.put("/profile/", form, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       toast.success("Profile Updated");
//       fetchProfile();
//     } catch (error) {
//       console.log(error);
//       toast.error("Update Failed");
//     }
//   };

//   if (loading) {
//     return (
//       <DashboardLayout>
//         <div className="flex items-center justify-center min-h-[60vh]">
//           Loading...
//         </div>
//       </DashboardLayout>
//     );
//   }

//   return (
//     <DashboardLayout>

//       <div className="min-h-screen text-white px-6 py-4">

//         {/* Header */}
//         <div className="mb-10 pt-6">
//   <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
//     My <span className="text-cyan-400">Profile</span>
//   </h1>

//           <p className="text-gray-400">
//             Manage your account information and settings.
//           </p>

//         </div>

//         {/* Main Section */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Profile Card */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

//             <div className="text-center">

//               <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-4xl font-bold">

//                 {user?.username?.charAt(0)?.toUpperCase()}

//               </div>

//               <h2 className="text-3xl font-bold mt-5">
//                 {user?.username}
//               </h2>

//               <p className="text-gray-400 mt-2">
//                 {user?.email}
//               </p>

//             </div>

//             <div className="grid grid-cols-2 gap-4 mt-8">

//               <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">

//                 <h3 className="text-3xl font-bold text-cyan-400">
//                   24
//                 </h3>

//                 <p className="text-gray-400">
//                   Reports
//                 </p>

//               </div>

//               <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">

//                 <h3 className="text-3xl font-bold text-cyan-400">
//                   95%
//                 </h3>

//                 <p className="text-gray-400">
//                   Accuracy
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* Edit Profile */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

//             <h2 className="text-2xl font-bold mb-6">
//               Edit Profile
//             </h2>

//             <input
//               type="text"
//               name="username"
//               value={form.username}
//               onChange={handleChange}
//               placeholder="Username"
//               className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />

//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />

//             <button
//               onClick={handleUpdate}
//               className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:opacity-90"
//             >
//               Update Profile
//             </button>

//           </div>

//         </div>

//         {/* Change Password */}
//         <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

//           <h2 className="text-2xl font-bold mb-6">
//             Change Password
//           </h2>

//           <div className="grid md:grid-cols-2 gap-4">

//             <input
//               type="password"
//               placeholder="Old Password"
//               className="p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />

//             <input
//               type="password"
//               placeholder="New Password"
//               className="p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />

//           </div>

//           <button className="mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 font-semibold hover:opacity-90">
//             Change Password
//           </button>

//         </div>

//       </div>

//     </DashboardLayout>
//   );
// }

// export default Profile;









import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../components/DashboardLayout";
import api from "../api/axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("access");

      const res = await api.get("/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data);

      setForm({
        username: res.data.username || "",
        email: res.data.email || "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("access");

      await api.put("/profile/", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Profile Updated");
      fetchProfile();
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[60vh] text-white">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen text-white px-6 py-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold text-white mb-3">
            My <span className="text-cyan-400">Profile</span>
          </h1>

          <p className="text-gray-400 text-lg">
            Manage your account information and settings.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Profile Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <div className="text-center">

              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-4xl font-bold shadow-lg">
                {user?.username?.charAt(0)?.toUpperCase()}
              </div>

              <h2 className="text-3xl font-bold mt-5">
                {user?.username}
              </h2>

              <p className="text-gray-400 mt-2">
                {user?.email}
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">

                <h3 className="text-3xl font-bold text-cyan-400">
                  24
                </h3>

                <p className="text-gray-400">
                  Reports
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">

                <h3 className="text-3xl font-bold text-green-400">
                  95%
                </h3>

                <p className="text-gray-400">
                  Accuracy
                </p>

              </div>

            </div>

          </div>

          {/* Edit Profile */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <h2 className="text-2xl font-bold mb-6">
              Edit Profile
            </h2>

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              onClick={handleUpdate}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:opacity-90 transition"
            >
              Update Profile
            </button>

          </div>

        </div>

        {/* Account Overview */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

          <h2 className="text-2xl font-bold mb-6">
            Account Overview
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">

              <h3 className="text-3xl font-bold text-cyan-400">
                {user?.id}
              </h3>

              <p className="text-gray-400 mt-2">
                User ID
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">

              <h3 className="text-3xl font-bold text-green-400">
                Active
              </h3>

              <p className="text-gray-400 mt-2">
                Status
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">

              <h3 className="text-3xl font-bold text-yellow-400">
                AI
              </h3>

              <p className="text-gray-400 mt-2">
                Analytics
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">

              <h3 className="text-3xl font-bold text-purple-400">
                {user?.created_at
                  ? new Date(user.created_at).getFullYear()
                  : "2026"}
              </h3>

              <p className="text-gray-400 mt-2">
                Joined
              </p>

            </div>

          </div>

          <div className="mt-8 border-t border-white/10 pt-6">

            <h3 className="text-xl font-semibold mb-4">
              Account Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-white/5 rounded-xl p-4">

                <p className="text-gray-400 text-sm">
                  Username
                </p>

                <p className="text-lg font-semibold">
                  {user?.username}
                </p>

              </div>

              <div className="bg-white/5 rounded-xl p-4">

                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <p className="text-lg font-semibold">
                  {user?.email}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Profile;





