import React from 'react';
import Hero from './Hero/Hero';
import Middle from './Middle-section/Middle';
import Question from './QuestionForm/Question';


const Home = () => {
    return (
        <div>
               <Hero></Hero>
               <Middle></Middle>
               <Question></Question>
        </div>
    );
};

export default Home;