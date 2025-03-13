import Header from "./components/header"
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Office from "./pages/Office";
import Copilot from "./pages/Copilot";
import Window from "./pages/Window";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import UserRegistration from "./pages/UserRegistration";
import FetchData from "./pages/FetchData";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/office" element={<Office />} />
        <Route path="/copilot" element={<Copilot />} />
        <Route path="/window" element={<Window />} />
        <Route path="/registration" element={<UserRegistration />} />
        <Route path="/fetchdata" element={<FetchData />} />
      </Route>
    )
  )

  return (

    <div>
      <RouterProvider router={router} />
    </div>

    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/office" element={<Office />} />
    //     <Route path="/copilot" element={<Copilot />} />
    //     <Route path="/window" element={<Window />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  )
}

export default App
