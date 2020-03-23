import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';

class Episode extends React.Component {
  render() {
    return (
      <div className="Episode">
        <ReactPlayer url={this.props.url} />
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img src="/images/rbanner.png" />
        <div className="HeaderText">
          <h2>ברוכים הבאים לאתר הכי טוב ושמן</h2>
          <h2>מאגם טיטיקקה ועד לייק וונאקה</h2>
          <h2>אתר המעריצים הרשמי של</h2>
          <h1>משפחת שווץ</h1>
        </div>
        <img src="/images/lbanner.png" />
      </div>

      <div className="QuickAccess">
        <img src="/images/quickaccess.png" />
        <div className="Episodes">
          <Episode url="https://www.youtube.com/watch?v=XsFe56c_k2c" />
          <Episode url="https://www.youtube.com/watch?v=qeF3Sx_IGvE" />
          <Episode url="https://www.youtube.com/watch?v=IsCTJhkO624" />
        </div>
      </div>
      <hr />
      <div className="Petition">
        <div>
          <div>
            <h3>אתה חותם על העצומה או נו מה?</h3>
            <h4>עצומה של ה.. של הזה ש... אנחנו רוצים</h4>
            <h4>להביא את פישוטו לטלוויזיה all of a sudden</h4>
          </div>
          <div className="FormInput">
            <div className="FormRow">
              <input type="text" placeholder="השם שלך הפרטי" className="Input"/>
              <input type="text" placeholder="הזה של המשפחה" className="Input"/>
            </div>
            <input type="text" placeholder="כתובת של האלטרוק.. אלקטור... מייל" className="Input"/>
            <div className="FormRow">
              <img src="/images/pishoto.png" />
              <button className="Input">ארך</button>
            </div>
          </div>
        </div>
        <img src="/images/petition.png" />
      </div>
      <hr />
      <div className="Footer">
        <img src="/images/haimonlimon.png" className="Lemon" />
        <div className="Credit">
          <img src="/images/hi.png" />
          <p>עמליה בניית אתרים בע״מ</p>
        </div>
      </div>
    </div>
  );
}

export default App;
