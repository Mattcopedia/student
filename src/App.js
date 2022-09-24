import { Switch, Route } from 'react-router-dom';
import Document from 'pages/Document';
import GpaTool from 'pages/GpaTool';
import PrintOut from 'pages/PrintOut';
import Profile from 'pages/Profile';
import Result from 'pages/Result';  
import CourseRegistration from 'pages/CourseRegistration';
import StudentHelpDesk from 'components/StudentHelpDesk';
import StudentUnionAffairs from 'components/StudentUnionAffairs';
import SocialMedia from 'components/SocialMedia';
import Login from 'components/Login'; 
import PrintOutForm from 'components/PrintOutComponent/PrintOutForm';

 
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';    
import CreateAccountS from 'components/CreateAccount';  

import WebFont from "webfontloader";  
import SignupNow from 'components/SignupNow';
import CreateLoginPassword from 'components/CreateLoginPassword'; 
import CourseTimeTables from 'components/CourseTimeTable';
import Examtimetable from "components/Examtimetable"
import UniversityMaps from 'components/UniversityMaps';
import ProfileEdit from 'components/ProfileComponents/ProfileEdit';
import EditPassword from 'components/ProfileComponents/EditPassword';
import EditMedia from 'components/ProfileComponents/EditMedia';
import SearchYear from "components/ResultsComponents/SearchYear"
import YourResult from 'components/ResultsComponents/YourResult';
import OutstandingResult from 'components/ResultsComponents/OutstandingResult';
import SubmitCourseForm from 'components/CoureRegistrationFormComponent/SubmitCourseForm';
import PrintOutSelectForm from 'components/PrintOutComponent/PrintOutSelectForm';
import PrintOutFormTable from 'components/PrintOutComponent/PrintOutFormTable';
import CGPACalculator from 'components/CGPAComponent/CGPACalculator';
import CGPAForecaster from 'components/CGPAComponent/CGPAForeCaster';
import CGPAGoalSetter from 'components/CGPAComponent/CGPAGoalSetter';
import CGPACalculatorinput from 'components/CGPAComponent/CGPACalculatorInput';
import CGPAGoalSetterInput from 'components/CGPAComponent/CGPAGoalSetterInput';
import CGPAForecasterInput from 'components/CGPAComponent/CGPAForecasterInput';
import UploadDoc from 'components/DocumentComponents/UploadDoc';
import Maps from 'components/Maps';
import SignUpTest from 'auth/SignUptest';
import Logintest from 'auth/Logintest';
import LoginHomePageTest from 'auth/LoginHomePageTest';
import TestDashboard from 'pages/TestDashboard';
// import HomePage from 'pages/Dashboard'; 
import Look from 'components/look'; 
import See from 'components/see';
import { LoginProvider } from 'components/LoginContext';
import AdminNavbar from 'components/AdminNavbar';
import { PrivateRoute } from './auth/PrivateRoute';   
// import AdminPrivateRoute from 'auth/AdminPrivateRoute'; 
import HomePage from 'pages/Dashboard';
// import { useToken } from "./auth/useToken"   
// import { createBrowserHistory } from 'history';




WebFont.load({
    google: {
        families: ['Poppins', "Roboto:400,500,900","Product Sans Medium:400"]
    }
  }); 

function App() { 

    // const history = createBrowserHistory();

    return ( 
        <>     
          
              
          <Route path="/logintest" component={Logintest} />   
                <Route  path="/signup" component={SignupNow} />  
                <Route  path="/signuptest" component={SignUpTest} />  
                <Route  path="/homepagetest" component={LoginHomePageTest} />  
        
        

          <Route  path="/createpassword" component={CreateLoginPassword} />   
          <Route  path="/createaccount" component={CreateAccountS} />  
          <Route  path="/login" component={Login} /> 
          
        

        <div className="md:ml-64 white "> 
         

      


                  
        <Switch>
        <PrivateRoute path="/printout" >
                    <PrintOut />
                    </PrivateRoute> 

        <PrivateRoute path="/result" >
                    <Result />
                    </PrivateRoute> 
                    
        <PrivateRoute path="/gpatool" >
                    <GpaTool />
                    </PrivateRoute> 

        <PrivateRoute path='/document'> 
                <Document />
                </PrivateRoute> 
                   
            <PrivateRoute path="/profile" >
                    <Profile />
                    </PrivateRoute> 
   
                    {/* //   [
  //     {
  //         "userId": "UNIGIG001",
  //         "school": "UNIGIG",
  //         "semester": "Second 2021/2022",
  //         "courseCode": "CHM201"
  //     },
  //     {
  //         "userId": "UNIGIG001",
  //         "school": "UNIGIG",
  //         "semester": "Second 2021/2022",
  //         "courseCode": "MTH201"
  //     }
  // ] */}
  

{/*              
        <PrivateRoute path="/" >
                    <HomePage />
                    </PrivateRoute>  */} 
                    
                    

                    {/* <AdminPrivateRoute   path="/" name="Admin" />   */}

         {/* <Route  path="/" component={HomePage} /> */}

            {/* <Route  path="/document" component={Document} /> */} 
            {/* <Route  path="/gpatool" component={GpaTool} /> */}
            {/* <Route  path="/printout" component={PrintOut} /> */}

           

            <PrivateRoute  path="/result">  <Result /> </PrivateRoute>
            <PrivateRoute  path="/help">  <StudentHelpDesk /> </PrivateRoute>
            <PrivateRoute  path="/coursereg">  <CourseRegistration /> </PrivateRoute>  
            <PrivateRoute  path="/studentunionaffairs">  <StudentUnionAffairs /> </PrivateRoute> 
            <PrivateRoute  path="/social-media">  <SocialMedia /> </PrivateRoute> 
            <PrivateRoute  path="/coursetimetable">  <CourseTimeTables /> </PrivateRoute>   
            <PrivateRoute  path="/examtimetable">  <Examtimetable /> </PrivateRoute>  
            <PrivateRoute  path="/maps">  <UniversityMaps /> </PrivateRoute>  
            <PrivateRoute  path="/profile-edit">  <ProfileEdit /> </PrivateRoute> 
            <PrivateRoute  path="/editpassword">  <EditPassword /> </PrivateRoute> 
            <PrivateRoute  path="/editmedia">  <EditMedia /> </PrivateRoute>  
            <PrivateRoute  path="/search-year">  <SearchYear /> </PrivateRoute>  
            <PrivateRoute  path="/your-result">  <YourResult /> </PrivateRoute> 
            <PrivateRoute  path="/outstanding-result">  <OutstandingResult /> </PrivateRoute>  
            <PrivateRoute  path="/submit-course-form">  <SubmitCourseForm /> </PrivateRoute>   
            <PrivateRoute  path="/printoutform">  <PrintOutForm /> </PrivateRoute> 
            <PrivateRoute  path="/printoutselectform">  <PrintOutSelectForm /> </PrivateRoute> 
            <PrivateRoute  path="/printoutformtable">  <PrintOutFormTable /> </PrivateRoute> 
            <PrivateRoute  path="/cgpa-calculator">  <CGPACalculator /> </PrivateRoute> 
            <PrivateRoute  path="/cgpa-forecaster">  <CGPAForecaster /> </PrivateRoute> 
            <PrivateRoute  path="/cgpa-goalsetter">  <CGPAGoalSetter /> </PrivateRoute> 
            <PrivateRoute  path="/cgpa-cal-input">  <CGPACalculatorinput /> </PrivateRoute>  
            <PrivateRoute  path="/cgpa-goalsetter-input">  <CGPAGoalSetterInput /> </PrivateRoute> 
            <PrivateRoute  path="/cgpa-forecaster-input">  <CGPAForecasterInput /> </PrivateRoute> 
            <PrivateRoute  path="/upload-doc">  <UploadDoc /> </PrivateRoute>     
            <PrivateRoute  path="/loadmaps">  <Maps /> </PrivateRoute>   
            <PrivateRoute  path="/test">  <TestDashboard /> </PrivateRoute>  
            <PrivateRoute  path="/look">  <Look /> </PrivateRoute>   
            <PrivateRoute  path="/see">  <See /> </PrivateRoute>   
            <PrivateRoute  path="/logip">  <LoginProvider /> </PrivateRoute> 
            <PrivateRoute  path="/admin">  <AdminNavbar /> </PrivateRoute> 
            
            <PrivateRoute path='/'> 
                <HomePage />
                </PrivateRoute> 
            </Switch> 
      


{/* 
            padding at the left placeholder profile +++ more to be done

            default will be unselected first checkbox coursereg  +++

            push up profile info make the remaining 3 like the first one +++

            align properly printout and they shouldn't touch the end of the screen

            Course List and not List of Registered Courses. +++
          
            popup comes up after they click transfer form and not on Page load  +++
          
            align signature and date properly like on the Figma, +++ 

            each page must have name of rakoni logo and university name.  

            margin dont touch end of screen(including Text and icons )
            and screen table should have enough space both outside and inbetween on different devices +++ continous improvement for this. 

            cgpa GpaTool
            he will give me the Cgpa logic

            all the text in Course Form the text should be center. All text even course form should be centered. All First letter in Capital CASES. 

            Apply all this to Other 

            First-Semester-For 2020/2021 Academic Session. +++

            Fully functional student module by next zoom demo.  

            Make Demo myself from my laptop */}


{/* total course taken and stuff all should be capital case for the first letters
            rakoni logo by sidebar and replace the word rakoni with unigig vice versa
            increase the size of the logo
            leave register pending 
            login api
            use only email address and password
            in profile section we will use login details to populated the data
            later the numbers will be populated
            courses under student programme 
            courses available will be populated from database
            forget
            study courses and grades
            semester isnt there 
            show the entire result and not specific for semester. the search icon is not useful.
            course submission 
            print course form should go to print pages. we want to submit all those data to databse using the api 
            it is only the course code, userid,semester,school i am pushing.
            hold school from login api route in variable and submit to server
            the last api route is what is used to populate the print out form.  */}

            
           
            
            
              
        </div> 

          

        </>
   
    );
}

export default App; 

