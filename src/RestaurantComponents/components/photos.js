import React, { Component } from 'react';
import axios from 'axios';
import FormRecherche from './formRecherche';
import HitItem from './hitItem';

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            currentPage: 1,
            pageSize: 10,
            currentKeyWord: 'food',
            totalPages: 1,
            pages: [],

        }
    }
    componentDidMount() {
        axios.get("https://pixabay.com/api/?key=39424894-c13cb24e59a50b0a7318c8579&q="
            + "food" + "&page=" + this.state.currentPage + "&per_page=" + this.state.pageSize)
            .then((response) => {
                console.log(response.data.hits);
                let totalPages = Math.ceil(response.data.totalHits / this.state.pageSize);
                this.setState({
                    hits: response.data.hits,
                    totalPages: totalPages,
                    pages: new Array(totalPages).fill(0)
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }


    getHits(keyWord) {
        let url = "https://pixabay.com/api/?key=39424894-c13cb24e59a50b0a7318c8579&q="
            + keyWord + "&page=" + this.state.currentPage + "&per_page=" + this.state.pageSize;

        axios.get(url).then((resp) => {
            let totalPages = Math.ceil(resp.data.totalHits / this.state.pageSize);
            this.setState({
                hits: resp.data.hits,
                totalPages: totalPages,
                pages: new Array(totalPages).fill(0),
                currentKeyWord: keyWord
            });
        }).catch(err => {
            console.log(err)
        });
    }

    search = (keyWord) => {
        this.getHits(keyWord);
    }

    goToPage = (page) => {
        this.setState({
            currentPage: page
        }, () => {
            this.getHits(this.state.currentKeyWord)
        });
    }

    render() {
        return (

            <div>
                <FormRecherche searchPhoto={this.search} />
                <div>
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((v, index) =>
                                <li key={index}>
                                    <button className={(this.state.currentPage === index + 1) ? 'btn btn-warning' : 'btn btn-link'} onClick={() => this.goToPage(index + 1)}>{index + 1}</button>
                                </li>
                            )

                        }
                    </ul>
                </div>

                <div className="row">
                    {
                        this.state.hits.map(hit =>
                            <HitItem hit={hit} details={false} key={hit.id}></HitItem>
                        )
                    }
                </div>
            </div>
        );
    }
}
export default Photos;
