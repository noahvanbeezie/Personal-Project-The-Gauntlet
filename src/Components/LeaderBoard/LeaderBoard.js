import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import './LeaderBoard.css'


class LeaderBoard extends React.Component{
    constructor(){
        super()
        this.state = {
            leaderboard:[],


        }
    }
    componentDidMount(){
        axios.get('/api/leaderboard/byscore').then( res => {
            this.setState({leaderboard:res.data})}
            )}

    sortByScore = () => {
        axios.get('/api/leaderboard/byscore').then( res => {
            this.setState({leaderboard:res.data})}
            )}

    sortByFloors = () => {
        axios.get('/api/leaderboard/byfloor').then( res => {
            this.setState({leaderboard:res.data})}
            )}
        
    

    render(){
        return(
            <div>
                <h1 className='pageTitle'>LeaderBoard</h1>
                    <button onClick={() => this.props.history.push('/header')}>MAIN MENU</button>
                    <button onClick={() => this.props.history.push('/profile')}>PROFILE</button>
                <div>
                    <button onClick={this.sortByScore}>By Score</button>
                    <button onClick={this.sortByFloors}>By Floor</button>
                </div>
                {this.state.leaderboard.length === 0 ? (
                    <p>There aren't any LeaderBoard scores available!</p>
                ):(
                    <div className='leaderboard'>
                        {this.state.leaderboard.map(score => {
                            return(
                            <div className='leaderboardScore'>
                                <h2>{score.username}</h2>
                                <p>Points:{score.score}</p>
                                <p>Floors:{score.floors}</p>
                                <p>Death:{score.death}</p>
                            </div>
                            )
                        })}
                    </div>
                )}
            </div>
        )
    }

}
const mapStateToProps = reduxState =>{
    return{
        reduxState
    }
}

export default connect(mapStateToProps)(withRouter(LeaderBoard))