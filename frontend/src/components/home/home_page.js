import React from 'react';
import './home_page.css';
import '../../reset.css';
import PlayersBar from '../players_bar/players_bar';
import Footer from '../footer/footer';
import Article from '../article/article';
import Score from '../score/score';



<<<<<<< HEAD
=======


>>>>>>> 4a787362bc47b54eed32140abb80a11c3a7bcba7
class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.getTodaysDate = this.getTodaysDate.bind(this);
  }


  componentDidMount(){
    if (Object.entries(this.props.sports).length === 0) {

      // this.props.mlbScheduleObj(this.getTodaysDate())
      setTimeout(() => (this.props.nhlScheduleObj(this.getTodaysDate())), 1200)
      setTimeout(() => (this.props.nbaScheduleObj(this.getTodaysDate())), 2400)
    }
  }

  getTodaysDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    return today = yyyy + "/" + mm + "/" + dd;
  }

  
  render() {
    return (
      <>
        <div className="homepage-container">
          <div className="homepage-background">
            <PlayersBar
              openModal={this.props.openModal}
              logout={this.props.logout}
            />
            <div className="information-container">
              <Article />
              {Object.entries(this.props.sports).length !== 0 ? (
                <Score
                  fetchGameScore={this.props.fetchGameScore}
                  sports={this.props.sports}
                />
              ) : null}
            

            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;


