import React, { Component } from 'react'
import AuthHOC from '../HOC/AuthHOC'
import { Button } from 'react-bootstrap'
import Stats from './Stats'

export class UserHome extends Component {

	state = {
		scores: {},
		file: this.props.user.avatar
	}

	componentDidMount() {
		fetch('http://localhost:3000/api/v1/user_high_scores', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then(res => res.json())
			.then(res => this.setState({ scores: res.high_scores }))
	}

	handleFile=(event)=>{
		console.log(event.target.files[0])
		this.setState({file: event.target.files[0] })
	}


	render() {
		const name = this.props.user ? this.props.user.username : "Player"
		return (
			<div className="container">
				<section id="our-stats">
				<	div>
						{ this.state.scores.hard ? <Stats scores={this.state.scores}/> : null}
					</div>
					<div className="row mb-5">
						<div className="col text-center">
							<h2 className="text-green h1 text-center">{`Welcome ${name}!`}</h2>
							<p className="text-uppercase font-italic font-weight-light">Remember to play at least 10 minutes a day to build your memory!</p>
						</div>
					</div>
					<div className="row mb-5">
						<div className="col text-center">
							<img src={this.state.file} className="img-fluid avatar" alt="" />
						</div>
					</div>
					<div className="row mb-5">
						<div className="col text-center">
							<input type='file' onChange={this.handleFile}/><Button onClick={this.uploadHandler}>Upload</Button>
						</div>
					</div>

					<div className="row text-center">
						<div className="col">
							<div className="counter">
								<i className="fa fa-hourglass-o fa-2x text-green"></i>
								<h2 className="timer count-title count-number" data-to="100" data-speed="1500">{this.state.scores.easy ? Math.max(...this.state.scores.easy) : 0} points</h2>
								<p className="count-text ">Highscore (Easy)</p>
							</div>
						</div>
						<div className="col">
							<div className="counter">
								<i className="fa fa-hourglass-half fa-2x text-green"></i>
								<h2 className="timer count-title count-number" data-to="1700" data-speed="1500">{this.state.scores.medium ? Math.max(...this.state.scores.medium) : 0} points</h2>
								<p className="count-text ">Highscore (Medium)</p>
							</div>
						</div>
						<div className="col">
							<div className="counter">
								<i className="fa fa-hourglass fa-2x text-green"></i>
								<h2 className="timer count-title count-number" data-to="11900" data-speed="1500">{this.state.scores.hard ? Math.max(...this.state.scores.hard) : 0} points</h2>
								<p className="count-text ">Highscore (Hard)</p>
							</div>
						</div>

						{/* <div className="col">
							<div className="counter">
								<i className="fa fa-clock-o fa-2x text-green"></i>
								<h2 className="timer count-title count-number" data-to="157" data-speed="1500">157</h2>
								<p className="count-text ">Total Time Played</p>
							</div>
						</div> */}
					</div>
				</section>
			</div>
		)
	}
}

export default AuthHOC(UserHome)
