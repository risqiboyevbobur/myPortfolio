import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="eFood Project"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          to="https://google.com"
          see="https://efoodmarket.netlify.app"
        />
        <ProjectsCard
          title="Crud using react js"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          to="https://google.com"
          see="https://crud-using-react.netlify.app"
        />
        <ProjectsCard
          title="React-project"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          to="https://google.com"
          see="https://react-project123.netlify.app"
        />
        <ProjectsCard
          title="My Shopping Card"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          to="https://google.com"
          see="https://frabjous-mochi-049a00.netlify.app"
        />
        <ProjectsCard
          title="Translate website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          to="https://google.com"
          see="https://willowy-monstera-5fd6e6.netlify.app"
        />
        <ProjectsCard
          title="Pagination"
          des=" Now it doesn't work becouse i use db.json  Explicabo quibusdam voluptate
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectTwo}
          to="https://google.com"
          see="https://rad-caramel-c2edcc.netlify.app"
        />
        <ProjectsCard
          title="Weather app"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectThree}
          to="https://google.com"
          see="https://weather-demo-website.netlify.app"
        />
        <ProjectsCard
          title="Login Page"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://solved-questions.netlify.app"
        />
        <ProjectsCard
          title="Dynamic Router"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://dynamicrouterandsearch.netlify.app"
        />
        <ProjectsCard
          title="Get Value "
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://react-todolistonlycreate.netlify.app"
        />
        <ProjectsCard
          title="Card Hover"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://reactcard-hover-dynamic.netlify.app"
        />
        <ProjectsCard
          title="Animation Menu"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://easymenu1.netlify.app"
        />
        <ProjectsCard
          title="Clock"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://dailyclocknumber1.netlify.app"
        />
        <ProjectsCard
          title="IQRO AGENCY"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://wedaretobegreate.netlify.app"
        />
        <ProjectsCard
          title="Counter"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://reactdemo-bobur.netlify.app"
        />
        <ProjectsCard
          title="Animation Swipe"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://swipeanimation.netlify.app"
        />
        <ProjectsCard
          title="Bubble Animation"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://animationbubble.netlify.app"
        />
        <ProjectsCard
          title="Button animation with water"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://wateranimationnumber1.netlify.app"
        />
          <ProjectsCard
          title="Menu"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://menuehover.netlify.app"
        />
          <ProjectsCard
          title="Game X and O"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo quibusdam voluptate sapiente voluptatibus harum quidem"
          src={projectOne}
          to="https://google.com"
          see="https://gamexando.netlify.app"
        />
      </div>
    </section>
  );
};

export default Projects;
