import C from '../assets/tech/c.png'
import CPlusPlus from '../assets/tech/c++.png'
import java from '../assets/tech/java.png'
import python from '../assets/tech/python.png'
import ml from '../assets/tech/ml.png'
import ds from '../assets/tech/dataScience.png'
import nlp from '../assets/tech/nlp.png'
import dsa from '../assets/tech/dsa.png'
import javascript from '../assets/tech/javascript.png'
import reactjs from '../assets/tech/reactjs.png'
import mySQL from '../assets/tech/mySQL.png'
import oracleSQL from '../assets/tech/oracleSQl.png'
import mongoDB from '../assets/tech/mongodb.png'
import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import tailwind from '../assets/tech/tailwind.png'
import fastapi from '../assets/tech/fastapi.png'
import git from '../assets/tech/git.png'
import github from '../assets/tech/github.png'
import linux from '../assets/tech/linux.png'

let techStack = {
    Languages : [['C', 'Java', 'Data Structures in Java', 'Python', 'C++'],[C, java, dsa, python, CPlusPlus]],
    AI : [['Data Science', 'Machine Learning', 'Natural Language Processing'], [ds,ml, nlp]], 
    Web : [['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'ReactJS', 'FastAPI'], [html, css, tailwind, javascript,reactjs,fastapi]],
    Databases : [['MongoDB', 'MySQL', 'Oracle SQL'], [mongoDB, mySQL, oracleSQL]],
    Cores : [['Computer Networks', 'Linux', 'Object Oriented Programming', 'Git'],[linux,git]],
    Tools : [['Github', 'VS Code', 'Google Colab', 'Replit'], [github]]
}

export {techStack};