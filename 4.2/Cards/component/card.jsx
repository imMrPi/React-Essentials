import React from 'react';
import CardHeader from './cardHeader';
import CardBody from './CardBody';
import DeleteButton from './DeleteButton';

const Card = ({ title, body, onDelete }) => {
    return (
        <div className="card">
            <CardHeader title={title} />
            <CardBody body={body} />
            <DeleteButton onDelete={onDelete} />
        </div>
    );
}

export default Card;
