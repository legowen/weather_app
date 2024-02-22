import React from "react";

const Error = () => {
  return (
    <div className="App">
      <div className="AppCover">
        <div className="error">
          <div className="error_info">
            <div>
              Sorry, <br /> Can't find the city
            </div>
            <button onClick={() => window.location.reload()}>HOME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;