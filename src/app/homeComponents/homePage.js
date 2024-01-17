
import React from 'react';
import Header from "../header";
import Home_top_Section from "./home_top_Section";
import HomeFeaturedProjects from "./home_featured_projects";
import HomeWhatWeDeliver from "./home_what_we_deliver";
import HomeWhyWorkWithUs from "./home_why_work_with_us";
import HomeOurClients from "./home_our_clients";
import ProjectInMind from "../commonComponents/projectInMind";
import BlogCardsSec from "../commonComponents/blog_cards_sec";
import Footer from "../footer";
const HomePage = () => {
    
    return (
       <><Header/>
       <div style={{position: "relative", zIndex: 2, backgroundColor: "#ffff"}}>
       <Home_top_Section></Home_top_Section>
       <HomeFeaturedProjects></HomeFeaturedProjects>
       <HomeWhatWeDeliver></HomeWhatWeDeliver>
       <HomeWhyWorkWithUs></HomeWhyWorkWithUs>
       </div>
       {/* <div style={{height: "1500px", position: "static"}}></div> */}
       
       <HomeOurClients></HomeOurClients>
       
       {/* <BlogCardsSec></BlogCardsSec> */}
       <ProjectInMind></ProjectInMind>
      
       <Footer></Footer></>
            
        
    
    );
}

export default HomePage;