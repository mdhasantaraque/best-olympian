import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <h1>Answer to question</h1>
      <div className="ans-question">
        <h3>1. How does react work?</h3>
        <p>
          Ans: Users can create a representation of a DOM node by declaring the
          Element function in React. <br />
          JSX tags have a name, children, and attributes. Numeric values and
          expressions must be written inside curly brackets. The quotation marks
          in JSX attributes represent strings, similarly to JavaScript. In most
          cases, React is written using JSX instead of standard JavaScript to
          simplify components and keep code clean.A React app usually has a
          single root DOM node. Rendering an element into the DOM will change
          the user interface of the page.Whenever a React component returns an
          element, the Virtual DOM will update the real DOM to match.
        </p>
      </div>
      <div className="ans-question">
        <h3>2. Difference between props and state?</h3>
        <p>
          Ans: <br /> Props: <br /> i. Props are read only. <br />
          ii. Props can be modified. <br />
          iii. Props are immutable. <br /> iv. Set by event handler. <br />
          State: <br /> i. State changes can be asynchronous. <br /> ii. State
          can be modified using this.setState. <br /> iii. State is mutable its
          value can be changed. <br /> iv. Set by parent component.
        </p>
      </div>
      <div className="ans-question">
        <h3>3. useEffect uses how many different works without data load?</h3>
        <p>
          Ans: <br />
          1. Prevent useEffect from running every render <br /> 2. You can pass
          the special value of empty array as a way of saying “only run on
          mount, and clean up on unmount”. So if we changed our component above
          to call useEffect. <br /> 3.Just as we were able to set up useEffect
          to run when a state variable changed, the same can be done with props.
          Remember they're all regular variables! useEffect can trigger on any
          of them. <br /> 4.Sometimes you just want to do one tiny thing at
          mount time, and doing that one little thing requires rewriting a
          function as a class.
        </p>
      </div>
    </div>
  );
};

export default Blog;
