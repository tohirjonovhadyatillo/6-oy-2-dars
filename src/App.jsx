import React from 'react';
import './App.css';

function CombinedComponents() {
  return (
    <div className="combined-components">
      <div className="hello-world">
        <h2> Hello World</h2>
        <p>Hello, World!</p>
        <p>Salom, Dunyo!</p>
        <p>Привет, Мир!</p>
        <p>こんにちは、世界！</p>
      </div>

      <div className="animal-gallery">
        <h2> Animal Gallery</h2>
        <p>It 🐶</p>
        <p>Mushuk 🐱</p>
        <p>Fil 🐘</p>
        <p>Sher 🦁</p>
        <p>Qush 🐦</p>
      </div>

      <div className="color-list">
        <h2>Color List</h2>
        <div className="color-item">
          <span>Qizil</span>
          <div className="color-box" style={{ backgroundColor: 'red' }}></div>
        </div>
        <div className="color-item">
          <span>Yashil</span>
          <div className="color-box" style={{ backgroundColor: 'green' }}></div>
        </div>
        <div className="color-item">
          <span>Moviy</span>
          <div className="color-box" style={{ backgroundColor: 'blue' }}></div>
        </div>
        <div className="color-item">
          <span>Sariq</span>
          <div className="color-box" style={{ backgroundColor: 'yellow' }}></div>
        </div>
        <div className="color-item">
          <span>To'q qizil</span>
          <div className="color-box" style={{ backgroundColor: 'maroon' }}></div>
        </div>
      </div>

      <div className="weekdays">
        <h2>Week Days</h2>
        <ul>
          <li>Dushanba</li>
          <li>Seshanba</li>
          <li>Chorshanba</li>
          <li>Payshanba</li>
          <li>Juma</li>
          <li>Shanba</li>
          <li>Yakshanba</li>
        </ul>
      </div>

      <div className="greeting-card">
        <h2> Greeting Card</h2>
        <p>Tug'ilgan kuning bilan!</p>
        <span>🎉</span>
      </div>

      <div className="cities">
        <ul>
          <li><strong>Parij</strong> – Fransiya</li>
          <li><strong>Tokio</strong> – Yaponiya</li>
          <li><strong>Nyu-York</strong> – AQSh</li>
          <li><strong>London</strong> – Angliya</li>
          <li><strong>Toshkent</strong> – O'zbekiston</li>
        </ul>
      </div>

      <div className="season-colors">
        <div className="season-item">
          <span>Bahor</span>
          <div className="color-box" style={{ backgroundColor: 'green' }}></div>
        </div>
        <div className="season-item">
          <span>Yoz</span>
          <div className="color-box" style={{ backgroundColor: 'yellow' }}></div>
        </div>
        <div className="season-item">
          <span>Kuz</span>
          <div className="color-box" style={{ backgroundColor: 'orange' }}></div>
        </div>
        <div className="season-item">
          <span>Qish</span>
          <div className="color-box" style={{ backgroundColor: 'lightblue' }}></div>
        </div>
      </div>

      <div className="simple-menu">
        <h2>Simple Menu</h2>
        <nav>
          <ul>
            <li>Bosh sahifa</li>
            <li>Biz haqimizda</li>
            <li>Aloqa</li>
            <li>Yangiliklar</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default CombinedComponents;