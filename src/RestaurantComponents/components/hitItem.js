import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HitItem(props) {
    return (
        <div className={(props.details === false) ? 'col-md-auto' : 'm-2'}>
            <div className="card" key={props.hit.id}>
                <div className="card-header bg-warning">{props.hit.tags} </div>
                <div className="card-body">
                    {
                        (props.details === false) ?
                            <img className="card-img" height={200} src={props.hit.webformatURL} alt="" />
                            : <img src={props.hit.largeImageURL} alt="" />
                    }
                </div>
            </div>
        </div>
    );
}

export default HitItem;
