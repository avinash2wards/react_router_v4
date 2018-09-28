import React from "react";
import { Route, Link } from "react-router-dom";

function Topics(props) {
	const matchUrl = props.match.url;
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${matchUrl}/context`}>Context</Link>
				</li>
				<li>
					<Link to={`${matchUrl}/props`}>Props</Link>
				</li>
				<li>
					<Link to={`${matchUrl}/state`}>State</Link>
				</li>
			</ul>
			<div>
				<Route path={`${matchUrl}/:topicname`} component={TopicSelector} />
				<Route
					exact
					path={matchUrl}
					render={() => <h3>Please select a topic.</h3>}
				/>
			</div>
		</div>
	);
}

const TopicSelector = ({ match }) => <p>{match.params.topicname}</p>;

export default Topics;
