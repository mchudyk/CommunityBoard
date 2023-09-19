import './App.css';
import WorkshopCard from './components/Workshopcard';


const App = () => {
    return (
        <div className="app">
            <h1>Upcoming Workshops for Aspiring Web Developers</h1>
            <WorkshopCard title = "Introduction to HTML" date = "25th Sep 2023" location = "Online" description = "Basics of HTML." link = "https://www.w3schools.com/html/" />
            <WorkshopCard title = "Advanced CSS Techniques" date = "26th Sep 2023" location = "Online" description = "Deep dive into CSS." link = "https://www.w3schools.com/css/" />
            <WorkshopCard title = "JavaScript 101" date = "27th Sep 2023" location = "Online" description = "Getting started with JavaScript." link = "https://www.javascript.com/" />
            <WorkshopCard title = "Responsive Web Design" date = "28th Sep 2023" location = "Online" description = "Making websites mobile-friendly." link = "https://www.w3schools.com/html/html_responsive.asp" />
            <WorkshopCard title = "React Basics" date = "29th Sep 2023" location = "Online" description = "Introduction to React." link = "https://react.dev/" />
            <WorkshopCard title = "Vue vs React" date = "30th Sep 2023" location = "Online" description = "Comparing two popular frameworks." link = "https://www.mindinventory.com/blog/reactjs-vs-vuejs/#:~:text=What%20is%20the%20difference%20between,shorter%20time%20duration%20than%20ReactJS." />
            <WorkshopCard title = "Backend with Node.js" date = "1st Oct 2023" location = "Online" description = "Intro to backend development." link = "https://nodejs.org/en" />
            <WorkshopCard title = "Databases Explained" date = "2nd Oct 2023" location = "Online" description = "Understanding SQL vs NoSQL." link = "https://www.oracle.com/database/what-is-database/#:~:text=A%20database%20is%20an%20organized,database%20management%20system%20(DBMS)." />
            <WorkshopCard title = "DevOps for Begineers" date = "3rd Oct 2023" location = "Online" description = "Introduction to deployment and scaling." link = "https://www.atlassian.com/devops#:~:text=DevOps%20is%20a%20set%20of,and%20collaboration%2C%20and%20technology%20automation." />
            <WorkshopCard title = "Webdevelopment: How to start" date = "4th Oct 2023" location = "Online" description = "Introduction to deployment and scaling." link = "https://brainstation.io/career-guides/how-to-become-a-web-developer" />
        </div>
    );
}

export default App;