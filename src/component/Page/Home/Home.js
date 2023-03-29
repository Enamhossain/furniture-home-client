import React from 'react';
import Category from './Category/Category';

import Hero from './Hero/Hero';

import Question from './QuestionForm/Question';
import Section from './section1/Section';


const Home = () => {
    return (
        <div>
               <Hero></Hero>
               <Section></Section>
               <Category></Category>
               <Question></Question>
        </div>
    );
};

export default Home;