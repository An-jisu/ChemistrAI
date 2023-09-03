import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "../routes/Main";
import GetSkinType from "../routes/Get_skin_type"; 
import GetPicture from "../routes/Get_picture"; 
import AnalyzeResult from "../routes/Analyze_result"; 
import Result from "../routes/Result"; 
import Loading from "../routes/Loading"; 

const AppRouter = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/get_skin_type" element={<GetSkinType />} />
        <Route exact path="/get_picture" element={<GetPicture />} />
        <Route exact path="/analyze_result" element={<AnalyzeResult />} />
        <Route exact path="/result" element={<Result answer={true} />} />  
        <Route exact path="/loading" element={<Loading />} />    
      </Routes>
    </Router>
  )
}

export default AppRouter;
