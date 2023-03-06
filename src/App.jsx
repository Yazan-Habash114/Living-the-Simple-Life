import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import RecentPosts from "./pages/RecentPosts"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/recent-posts" element={<RecentPosts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App