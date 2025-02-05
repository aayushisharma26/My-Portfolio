import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import megaminds from "../../Assets/Projects/megaminds.png";
import country from "../../Assets/Projects/country.jpeg";
import file from "../../Assets/Projects/file.png";
import food from "../../Assets/Projects/food.png";
import movie from "../../Assets/Projects/movie.png";
// import country from "../../Assets/Projects/country.jpeg";
import todo from "../../Assets/Projects/todo.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={megaminds}
              isBlog={false}
              title="E-commerce Website"
              description="Our e-commerce clothing website offers the latest fashion trends with a seamless shopping experience. From casual wear to elegant outfits, we have a wide collection for every occasion. Enjoy easy navigation, secure payments, and fast delivery."
              ghLink="https://github.com/aayushisharma26/Megaminds_Project"
              demoLink="https://megaminds-project-mmug.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={country}
              isBlog={false}
              title="Country Explorer"
              description="Country Explorer is a user-friendly app for discovering countries around the world. Search and filter by region and Language add to favorites,view detailed information,and explore real-time data from the REST Countries API. Explore Country Explorer"
              ghLink="https://github.com/aayushisharma26/country-explorer-"
              demoLink="https://country-explorer-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={file}
              isBlog={false}
              title="Chaining Dashboard"
              description="Chaining Dashboard Select a user from the dropdown and create a post with a title and body.View all posts by the selected user in the posts section.Click View Comments to see comments in a modal. For user information."
              ghLink="https://github.com/aayushisharma26/chaning-dashboard"
              demoLink="https://chaning-dashboard.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Recipe Website"
              description="Our food recipe website brings you a variety of delicious and easy-to-make dishes. From quick snacks to gourmet meals, find recipes for every taste and occasion. Enjoy step-by-step instructions, expert tips, and a seamless cooking experience. Start cooking and savor the flavors today!"
              ghLink="https://github.com/aayushisharma26/recipe-website-group5"
              demoLink="https://parasdiwakar1.github.io/food-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Moview Review"
              description="Our movie review website lets you add, search, and review your favorite films. Easily manage your reviews by editing or deleting them anytime. Discover new movies, share your thoughts, and explore ratings from other users. Start reviewing now!"
              ghLink="https://github.com/aayushisharma26/ReactJs_Movie-listing"
              demoLink="https://react-js-movie-listing.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              description="A To-Do List is a tool used to organize tasks, prioritize activities, and keep track of tasks that need to be completed. It typically allows users to add, edit, and remove tasks, mark them as completed, and sometimes categorize them or set deadlines. Sorting features may be included to prioritize tasks based on due dates, importance, or completion status."
              ghLink="https://github.com/aayushisharma26/Todo_List_React"
              demoLink="https://todo-list-react-wine.vercel.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
