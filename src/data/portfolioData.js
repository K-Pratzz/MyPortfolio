import me from "../images/me.jpeg"
import identicalQues from "../images/identicalQues.png"
import careerLens from "../images/careerLens.png"
export const portfolioData = {
  name: "Kumari Pratibha",
  title: "Aspiring NLP Engineer and Data Scientist ",

  shortIntro: "Building real skills through consistent learning, projects, and problem-solving.",

  about: {
    description: "I am a Computer Science student focused on becoming a strong software engineer. I am currently learning data structures, web development, and artificial intelligence through hands-on projects. Instead of just consuming tutorials, I focus on understanding concepts deeply and applying them by building real projects. My goal is to secure a high-paying tech role and continuously grow my technical and problem-solving skills.",
    
    image: me,

    resumeLink: "https://canva.link/d0ncblzvse1q4d5"
  },

  skills: [
     "Python", "JavaScript","HTML","CSS",
    "React", 
    "Data Structures & Algorithms",
    "Machine Learning","NLP","Deep Learning(In Progress)",
    "Git & GitHub",
    "Problem Solving"
  ],

  projects: [
    {
      id: 1,
      title: "Identical Question Pair Detector",
      description: "Employs Natural Language Processing to identify if two questions share the same intent, even if phrased differently. It helps platforms like Quora reduce redundancy by automatically flagging and merging duplicate content.",
      tech: ["NLP", "Machine Learning","Python","Pandas"],
      liveLink: "https://identicalquestions-vz5glrbbwvpjdbxvagvk8u.streamlit.app/",
      githubLink: "https://github.com/K-Pratzz/IdenticalQuestions",
      image: identicalQues
    },
    {
      id: 2,
      title: "CareerLens",
      description: "CareerLens is a modern, responsive web application designed to help job seekers efficiently explore remote job opportunities.It fetches real-time remote job listings from public APIs, allowing users to search by job title, filter by location, sort results, and save their favorite jobs — all in a clean and intuitive interface.",
      tech: ["React","CSS","JavaScript"],
      liveLink: "https://sensational-bublanina-efb0a0.netlify.app/",
      githubLink: "https://github.com/K-Pratzz/CareerLens",
      image: careerLens
    }
  ],

  contact: {
    email: "kp939331@gmail.com",
    github: "https://github.com/K-Pratzz/",
    linkedin: "https://www.linkedin.com/in/kumari-pratibha-here?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  }
};