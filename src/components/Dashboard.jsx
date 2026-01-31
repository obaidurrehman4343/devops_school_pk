// import Header from "./Header";
// import Hero from "./Hero";
// import Solutions from "./Sloutions"; 
// function Dashboard() {
//   return (
//     <div className="dashboard">
//       <Header />
//       <Hero />
//       <Solutions/>
//     </div>
//   );
// }

// export default Dashboard;
import Header from "./Header";
import Hero from "./Hero";
import Challenges from "./Challenges";
import Solutions from "./Solutions";
import "./../styles/Dashboard.css"; // Make sure this exists or create it
import Instructors from "./Instructors";
import Courses from "./Courses"; 
import Questions from "./Questions";
import Footer from   "./Footer";
function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <Hero />
            <div style={{background: 'red', height: '2px', width: '100%'}}></div> {/* Debug line */}
            <Challenges />
            <div style={{background: 'blue', height: '2px', width: '100%'}}></div> {/* Debug line */}
            <Solutions />
            <div style={{background: 'green', height: '2px', width: '100%'}}></div> {/* Debug line */}
             <Instructors /> 
              <Courses /> 
              <Questions />
              <Footer />
        </div>
    );
}

export default Dashboard;