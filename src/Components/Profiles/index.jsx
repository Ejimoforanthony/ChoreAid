import Header from "../Layout/Header"
import TeamMemberCard from "./main"
import ProfileTabs from "./profileSections";
import Footer from "../Layout/Footer";
const Profile  =()=>{
    return(
        <>
        <Header />
        <TeamMemberCard />
        <ProfileTabs />
        <Footer />
        </>
    );
}

export default Profile;