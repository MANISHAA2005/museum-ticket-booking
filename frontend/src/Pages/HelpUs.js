import React from "react";
import "./HelpUs.css";

const HelpUs = () => {
  return (
    <div className="help-us">
      <h1>Help Us Improve!</h1>
      <p>
        Your feedback and support will help us build a better experience for
        everyone.
      </p>
      <p>
        We are also open to donations to support the museums listed in our app.
      </p>
      <form>
        <label>Your Feedback:</label>
        <textarea placeholder="Let us know how we can improve"></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default HelpUs;
