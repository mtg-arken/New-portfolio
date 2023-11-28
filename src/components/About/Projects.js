import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Projects() {
  const projects = [
    {
      title: "Review System",
      image: "project1.jpg",
      description:
        "Development and design of a web application to manage product reviews as part of my end of studies project",
    },
    {
      title: "Student Management",
      image: "project2.jpg",
      description:
        "Development of a desktop application for student management in the university",
    },
    {
      title: "Blog",
      image: "project3.jpg",
      description:
        "Development of a web application , A free space to share your opinions and chat with others ",
    },
  ];
  return (
    <>
      <h1>Projects</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {projects.map((project, index) => (
          
          <SwiperSlide key={index}>
            <div className="project-card">
              <h2 className="purple">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Projects;
