import me from "../images/me.jpeg"
import identicalQues from "../images/identicalQues.png"
import careerLens from "../images/careerLens.png"
export const portfolioData = {
  name: "Kumari Pratibha",
  title: "Aspiring NLP Engineer and Data Scientist ",

  shortIntro: "Building real skills through consistent learning, projects, and problem-solving.",

  about: {
    description: "I am a Computer Science student with strong interest in Artificial Intelligence, Natural Language Processing, and software engineering. Rather than only following tutorials, I focus on understanding concepts deeply and implementing them through projects and experimentation.I am currently improving my problem-solving skills through Data Structures & Algorithms while also exploring Machine Learning, Deep Learning, and modern web development. I enjoy building projects that combine logic, creativity, and real-world usefulness.",
    
    image: me,

    resumeLink: "https://canva.link/d0ncblzvse1q4d5"
  },

  skills: {
    "Programming Languages": ["Python", "JavaScript"],
    "Web Development": ["HTML", "CSS", "React.js", "Responsive Design"],
    "AI & Data Science": ["Machine Learning", "Natural Language Processing", "Deep Learning", "NumPy", "Pandas", "Scikit-learn"],
    "Computer Science Fundamentals": ["Data Structures & Algorithms", "Problem Solving", "Object-Oriented Programming"],
    "Tools & Technologies": ["Git", "GitHub", "VS Code", "Canva"]
  },

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