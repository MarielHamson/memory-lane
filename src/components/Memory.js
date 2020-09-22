import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Memory(props) {
	const myStyledList = {
		listStyle: 'none',
		cursor: 'pointer',
	};
	return (
		<React.Fragment>
      <div style={myStyledList} onClick={() => props.whenMemoryClicked(props.id)}>
				<Card style={{ width: '18rem' }} bg="secondary" text="light">
					<Card.Body>
						<Card.Title>{props.title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							{props.date}
						</Card.Subtitle>
						<Card.Text>
							<ul style={myStyledList}>
								<li>{props.place}</li>
							</ul>
						</Card.Text>
					</Card.Body>
          </Card>
			</div>
			<hr />
		</React.Fragment>
	);
}


Memory.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  place: PropTypes.string,
  id: PropTypes.string,
  timeOpen: PropTypes.object,
  whenMemoryClicked: PropTypes.func

}

export default Memory;