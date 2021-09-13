import React from "react";

const App = () => {
    return (
        <div className="container">
            <div className="valid-keys">
                <span className="matched">leon</span>
                <span className="remainder">ardo</span>
            </div>
            <div className="typed-keys"> asaasleonrllll</div>
            <div className="completed-words"> 
                <ol>
                    <li>leonardo</li>
                    <li>leo</li>
                    <li>nardo</li>
                </ol>
            </div>
        </div>
    );
};

export default App;