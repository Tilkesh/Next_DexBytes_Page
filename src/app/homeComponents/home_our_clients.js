import classes from './home_our_clients.module.css'
import './home_our_clients.css'
import React, { useState, useEffect } from 'react';
import BlogCardsSec from '../commonComponents/blog_cards_sec';


const HomeOurClients = () => {

 
  //  ######
  //  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     setIsVisible(entries[0].isIntersecting);
  //   });

  //    observer.observe(document.getElementById('blogCardSec'));

  //   return () => observer.disconnect();
  // }, []);



  // let test;
  // if(isVisible){
  //   test = 'static'
  // }else{
  //   test = 'fixed'
  // }
 


  //   jQuery(document).ready(function($){
  //     $(window).on('scroll', function(){
  //         if($(window).scrollTop() >= $('#element').offset().top){
  //             $('.menu').addClass('addclass');
  //         }
  //         else 
  //         {
  //             $('.menu').toggleClass('addclass');
  //             //or use $('.menu').removeClass('addclass');
  //         }
  //  });
  // });



  // document.addEventListener('DOMContentLoaded', function() {
  //   // var menu = document.querySelector('.menu');
  //   // var element = document.getElementById('element');
  //   const targetElement = document.getElementById('whyWork');
  //   const targetUpdateClass = document.getElementById('homeOurClientsSec');

  // });
  
  //####

  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const scroll = document.getElementById('blogCard85');
  //   const handleScroll = () => {
      
  //     setIsScrolled(window.scrollY > scroll.offsetHeight8); // Adjust threshold as needed
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll); // Cleanup
  //   };
  // }, []);
  


  // #####
    return(
      <>
        <section id='homeOurClientsSec'  style={{ left: "0px", width: "100%", top: "0px"}} className={`${classes.homeOurClientWr}`}>
            <div className={`${classes.wrapper}`}>
                <div className={`${classes.innerWrapper}`}>
                    <h3 className={`${classes.h3TextClients}`}>A few of our clients</h3>
                </div>
                <div className={`${classes.clientsLogoWr} ${classes.innerWrapper}`}>
                    <div className={`${classes.clientsLogoRow}`} style={{["margin-bottom"]: "100px"}}>
                    <img
                  src={"assets/images/clientslogo/clientlogo1.png"}
                  className={`${classes.clientslogoImg}`}
                ></img>
                <img
                  src={"assets/images/clientslogo/clientlogo2.png"}
                  className={`${classes.clientslogoImg}`}
                ></img>
                <img
                  src={"assets/images/clientslogo/clientlogo3.png"}
                  className={`${classes.clientslogoImg}`}
                ></img>
                    </div>
                    <div className={`${classes.clientsLogoRow}`}>
                    <img
                  src={"assets/images/clientslogo/clientlogo4.png"}
                  className={`${classes.clientslogoImg}`}
                ></img>
                <img
                  src={"assets/images/clientslogo/clientlogo5.png"}
                  className={`${classes.clientslogoImg}`}
                ></img>
                <img
                  src={"assets/images/clientslogo/clientlogo6.png"}
                  className={`${classes.clientslogoImg}`}
                ></img>
                    </div>
                </div>
                <div id='blankDiv' className={`${classes.joinTogetherBtnWr}`}><a className={`${classes.joinTogetherBtn}`} href="/jointogether">Let's join together</a></div>
            </div>
        </section>
        <div style={{position: "relative", zIndex: 2, backgroundColor: "#ffff"}} id='blogCard85'>
          <BlogCardsSec></BlogCardsSec>
        </div>
        </>
    );
}

export default HomeOurClients;