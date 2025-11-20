import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";

// import Dr from "./component/Dr";
// import Cr from "./component/Cr";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Create from "./component/Create";
import ProtectedRoute from "./component/ProtectedRoute";
import PostsEditPage from "./component/PostsEdit";
import SinglePostEdit from "./component/SinglePostEdit";
// import Uid from "./component/Uid";
// import Dr from "./component/Dr"; // not used

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Cr />} /> */}
        <Route path="/posts-edit" element={<ProtectedRoute><PostsEditPage /></ProtectedRoute>} />
        <Route path="/post-edit/:id" element={<ProtectedRoute><SinglePostEdit /></ProtectedRoute>} />
        {/* <Route path="/ge/su" element={<Dr />} /> */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}




// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/signup" />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/create" element={<Create />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
