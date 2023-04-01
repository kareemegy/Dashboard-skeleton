import Wrapper from "../components/ui/Wrapper";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import ThemeGenerator from "../pages/ThemeGenerator";
const RoutesWrapper = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="customize" element={<ThemeGenerator />} />
      </Routes>
    </Wrapper>
  );
};

export default RoutesWrapper;
