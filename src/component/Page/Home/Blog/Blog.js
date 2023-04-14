import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details open="">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What are the different ways to manage a state in a React application?</summary>
                            <div className="px-4 pb-4">


                                <ol className="list-decimal">
                                    <li>Local state: React components can maintain their state using the useState hook, which is a built-in hook provided by React. This is a simple way to manage the state of a component and is useful for managing small amounts of data.</li>
                                    <li>Context API: The React Context API provides a way to share data between components without having to pass the data through every level of the component tree. This is useful for managing data that needs to be accessed by multiple components in the application..</li>
                                    <li>Redux: Redux is a state management library that provides a global state store for the application. It provides a predictable way to manage the state of an application and is useful for managing complex applications with a large amount of data..</li>
                                    <li>MobX: MobX is another state management library that provides a way to manage the state of an application. It works by observing changes to data and automatically updating the UI when the data changes..</li>
                                    <li>React Query: React Query is a library that provides a way to manage data fetching and caching in a React application. It is useful for managing data that needs to be fetched from an API and provides a simple and efficient way to manage the data..</li>
                                    <li>Apollo Client: Apollo Client is a library for managing the data of a GraphQL API. It provides a way to manage data fetching, caching, and state management in a React application. It is useful for managing complex applications that use GraphQL as a data source..</li>


                                </ol>

                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does prototypical inheritance work?</summary>
                            <div className="px-4 pb-4">
                                <ol className='list-decimal'>
                                    <li>Prototypical inheritance is a mechanism of object-oriented programming in which objects inherit properties and behaviors from a prototype object. In JavaScript, all objects have a prototype, which is an object that provides a set of default properties and behaviors for that object.
                                        When an object is created in JavaScript, it has a prototype chain that links to its prototype. If a property or method is not found on the object itself, JavaScript will look for it on its prototype. If the property or method is not found on the prototype, it will continue to look up the chain until it reaches the top level of the prototype chain.</li>
                                </ol>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> What is a unit test? Why should we write unit tests?
                            </summary>
                            <div className="px-4 pb-4 space-y-2">
                                <ol className='list-decimal' >
                                    <li>

                                        A unit test is a type of software testing in which individual units or components of a software application are tested in isolation from the rest of the application. The purpose of a unit test is to validate that a specific unit of code, such as a function or method, behaves as expected under different scenarios or inputs.

                                        Unit tests are typically automated tests that are written by developers and executed as part of a continuous integration (CI) or continuous delivery (CD) pipeline. They can be executed quickly and repeatedly, providing fast feedback to developers about the correctness and quality of their code.

                                    </li>
                                </ol>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> React vs. Angular vs. Vue?
                            </summary>
                            <div className="px-4 pb-4 space-y-2">
                                <ol className='list-decimal' >
                                    <li>

                                        React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and makes it easy to manage the state of an application. React uses a virtual DOM, which means that changes to the UI are applied efficiently, resulting in better performance.

                                    </li>
                                    <li>
                                        Angular is a full-fledged JavaScript framework that provides developers with a complete solution for building web applications. It includes features such as dependency injection, two-way data binding, and a powerful template system. Angular also provides a CLI (command line interface) tool for creating and managing projects.

                                    </li>
                                    <li>
                                        Vue is a progressive JavaScript framework that is easy to learn and use. It provides developers with a simple, yet powerful, API for building web applications. Vue allows developers to build reusable UI components and provides a reactive data binding system, which means that changes to the data are automatically reflected in the UI.

                                    </li>
                                </ol>
                            </div>
                        </details>
                      
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;