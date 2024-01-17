"use client"
import React from "react";
import Header from "./header";
import Image from "next/image";
import styles from "./page.module.css";
import Home_top_Section from "./homeComponents/home_top_Section";
import HomeFeaturedProjects from "./homeComponents/home_featured_projects";
import HomeWhatWeDeliver from "./homeComponents/home_what_we_deliver";
import HomeWhyWorkWithUs from "./homeComponents/home_why_work_with_us";
import HomeOurClients from "./homeComponents/home_our_clients";
import ProjectInMind from "./commonComponents/projectInMind";
import BlogCardsSec from "./commonComponents/blog_cards_sec";
import Footer from "./footer";
import HomePage from "./homeComponents/homePage";
 


export default function Home() {
  return (
    <React.Fragment>
     {/* <Header/>
     <Home_top_Section></Home_top_Section>
     <HomeFeaturedProjects></HomeFeaturedProjects>
     <HomeWhatWeDeliver></HomeWhatWeDeliver>
     <HomeWhyWorkWithUs></HomeWhyWorkWithUs>
     <HomeOurClients></HomeOurClients>
     <BlogCardsSec></BlogCardsSec>
     <ProjectInMind></ProjectInMind>
     <Footer></Footer> */}
     <HomePage></HomePage>
    </React.Fragment>
  );
}
