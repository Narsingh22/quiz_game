import '../App.css';

export default function MyQuiz(props) {
    

    return (
        <div className="myContainer">
            <h1 className="p-3 bg-primary-subtle">{props.title}</h1>    

            <div className="questions-container">

                <div className="quiz-questions mx-auto col-4">
                    <strong>Q1. What is the primary function of HTML?</strong>
                    <div className="myOptions">
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>Styling web pages</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>Handling server-side logic</button>
                        <button className="btn-block col-12 my-1 mx-auto correct" onClick={props.myOptions}>Structuring the content of web pages</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>Creating interactive elements</button>
                    </div>
                </div>
                
                <div className="quiz-questions mx-auto col-4 d-none 1">
                    <strong>Q2. Which CSS property is used to control the spacing between the border and the content of a table cell?</strong>
                    <div className="myOptions">
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>Cell-padding</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>Cell-spacing</button>
                        <button className="btn-block col-12 my-1 mx-auto correct" onClick={props.myOptions}>Padding</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>Margin</button>
                    </div>
                </div>

                <div className="quiz-questions mx-auto col-4 d-none 2">
                    <strong>Q3. What is the main purpose of JavaScript in web development?</strong>
                    <div className="myOptions">
                        <button className="btn-block col-12 my-1 mx-auto correct  " onClick={props.myOptions}>To add interactivity and dynamic content to web pages</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>To add structure to web pages</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>To style web pages</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>To manage database operations </button>
                    </div>
                </div>

                <div className="quiz-questions mx-auto col-4 d-none 3">
                    <strong>Q4. Which HTML tag is used to create an ordered list?</strong>
                    <div className="myOptions">
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>&lt;ul&gt;</button>
                        <button className="btn-block col-12 my-1 mx-auto correct  " onClick={props.myOptions}>&lt;ol&gt;</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>&lt;list&gt;</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>&lt;li&gt;</button>
                    </div>
                </div>

                <div className="quiz-questions mx-auto col-4 d-none 4">
                    <strong>Q5. What is the purpose of the &lt;body&gt; tag in HTML?</strong>
                    <div className="myOptions">
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>To define the document's metadata</button>
                        <button className="btn-block col-12 my-1  mx-auto correct  " onClick={props.myOptions}>To contain the main content of the web page</button>
                        <button className="btn-block col-12 my-1  mx-auto" onClick={props.myOptions}>To define the document's structure</button>
                        <button className="btn-block col-12 my-1  mx-auto" onClick={props.myOptions}>To define the document's title</button>
                    </div>
                </div>

                <div className="quiz-questions mx-auto col-4 d-none 5">
                    <strong>Q6. What does CSS stand for?</strong>
                    <div className="myOptions">
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>Colorful Style Sheets</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>Creative Style System</button>
                        <button className="btn-block col-12 my-1 mx-auto correct  " onClick={props.myOptions}>Cascading Style Sheets</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>Computer Style System</button>
                    </div>
                </div>

                <div className="quiz-questions mx-auto col-4 d-none 6">
                    <strong>Q7. Which HTML tag is used to create a hyperlink?</strong>
                    <div className="myOptions">
                        <button className="btn-block col-12 my-1 mx-auto correct  " onClick={props.myOptions}>&lt;a&gt;</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>&lt;link&gt;</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>&lt;href&gt;</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>&lt;address&gt;</button>
                    </div>
                </div>

                <div className="quiz-questions mx-auto col-4 d-none 7">
                    <strong>Q8. What is the role of a web server?</strong>
                    <div className="myOptions">
                        <button className="btn-block col-12 my-1 mx-auto correct  " onClick={props.myOptions}>To host the website's files</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>To manage the database</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>To handle user input</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>To create the website's design</button>
                    </div>
                </div>

                <div className="quiz-questions mx-auto col-4 d-none 8">
                    <strong>Q9. What is the Document Object Model (DOM)?</strong>
                    <div className="myOptions">
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>A programming language</button>
                        <button className="btn-block col-12 my-1 mx-auto correct  " onClick={props.myOptions}>A way to represent the structure of HTML documents</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>A database management system</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>A graphical user interface</button>
                    </div>
                </div>

                <div className="quiz-questions mx-auto col-4 d-none 9">
                    <strong>Q10. Which HTML tag is used to define a paragraph?</strong>
                    <div className="myOptions">
                        <button className="btn-block col-12 my-1 mx-auto correct  " onClick={props.myOptions}>&lt;p&gt;</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>&lt;br&gt;</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>&lt;hr&gt;</button>
                        <button className="btn-block col-12 my-1 mx-auto" onClick={props.myOptions}>&lt;h1&gt;</button>
                    </div>
                </div>

                <div className="container my-5">
                    <p id="empty" className="text-center"></p>
                </div>

            </div>

        </div>
    )
}