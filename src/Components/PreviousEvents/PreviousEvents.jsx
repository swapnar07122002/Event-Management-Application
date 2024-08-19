import React from 'react';
import './PreviousEvents.css';
import PreviousEventsData from './PreviousEventsData';


const PreviousEvents = () => {
  return (
    
    <div className="previousevents"> 
      <h1>Previous Events</h1>
      

      <PreviousEventsData
      className="first-event"
      heading="Web Development Workshop: Building Responsive Websites"
      text="Building Responsive Websites is a comprehensive program designed to equip participants with the essential skills and knowledge needed to create modern, 
      responsive websites. Throughout the workshop, attendees will embark on a hands-on journey into the world of web development, learning how to craft websites that seamlessly adapt and respond to various screen sizes and devices."
       img1="https://paidcoursesforfree.com/wp-content/uploads/2019/07/Build-Modern-Responsive-Website-With-HTML5-CSS3-Bootstrap-750x422.jpg"
       img2="https://i.ytimg.com/vi/lC4gziCJAuo/maxresdefault.jpg"
      /> 


      <PreviousEventsData
      className="first-event-reverse"
      heading="Entrepreneurship Workshop: Launching Your Startup"
      text="Launching Your Startup is a transformative program designed to empower aspiring entrepreneurs with the knowledge, skills, and resources necessary to turn their business ideas into reality. This workshop provides a comprehensive roadmap for navigating the complexities of starting and scaling a successful startup venture."
       img1="https://thumbs.dreamstime.com/b/concept-start-up-entrepreneurship-155708120.jpg"
       img2="https://valiantceo.com/wp-content/uploads/2021/05/Entrepreneurs-Workshop-1140x641.jpg"
      /> 

<PreviousEventsData
      className="first-event"
      heading="Data Science Workshop: Introduction to Machine Learning"
      text="Introduction to Machine Learning is a comprehensive program designed to provide participants with a foundational understanding of machine learning concepts and techniques. In this workshop, attendees will embark on an exciting journey into the world of data science and machine learning, gaining hands-on experience with industry-standard tools and methodologies."
       img1="https://supplychainbeyond.com/wp-content/uploads/2017/09/what-is-machine-learning.jpg"
       img2="https://www.h2kinfosys.com/storage/2021/03/data-science-and-machine-learning.jpg"
      />
    </div>
  )
}

export default PreviousEvents;