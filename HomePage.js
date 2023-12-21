import React from 'react';
import './HomePage.css'; // Make sure you have this CSS file for styling

function HomePage() {
  return (
    <div>
      {/* ... other components or sections ... */}

      <div className="content-section">
        <div className="content-block">
          <img src="e_learning.png" alt="Learning Anywhere" className="content-image" />
          <h3>Learning anywhere anytime</h3>
          <p>Access the content from anywhere at anytime</p>
        </div>
        <div className="content-block">
          <img src="math.jpg" alt="Science in Darija" className="content-image" />
          <h3>Science in Darija</h3>
          <p>Find a wide range of videos explained in darija with translation to French and English</p>
        </div>
      </div>
      
      {/* ... other components or sections ... */}
    </div>
  );
}

export default HomePage;
