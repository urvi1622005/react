import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cubic">
      <header className="about">
        <h1>Simplify, Streamline, Succeed</h1>
        <p>We're building solutions for the hospitality industry.</p>
        <a href="mailto:info@cubik.in">Reach us at info@cubik.in</a>
        <button onClick={() => alert('Get onboarded')}>Get Onboarded</button>
        {/* <script src="https://cubik.in/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.20.3" id="elementor-frontend-js"></script> */}
      </header>
    </div>
  );
}
<React/>
export default App;
