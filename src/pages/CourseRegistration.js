import CourseReg from "components/CoureRegistrationFormComponent/CourseReg";
import Sidebar from "components/Sidebar";

 

export default function Dashboard() {
    return (
        <>
        
    <Sidebar />
     <div className="bg-white">
     <CourseReg />  
     </div>
          
        </>
    );
}
