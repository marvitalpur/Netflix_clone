import React, { useEffect, useRef, useState } from 'react';
import "./TitleCards.css";
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
    const [ApiData, setApiData] = useState([]);
    const cardsRef = useRef(null);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmYyNWRlNzY5ZjhmZGIyYmJkMDZkNTljNzNiMTBkMiIsIm5iZiI6MTcyNDIyNDM5Ni4wMDkyMDUsInN1YiI6IjY2YzQ0ZjNjYTEwNjYwMjNlY2QxMDQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DW81mj7lwt2qqoVj2y5L987vZqz-AHIr8YrboneMxwI'
        }
    };

    const handleWheel = (event) => {
        event.preventDefault();
        if (cardsRef.current) {
            cardsRef.current.scrollLeft += event.deltaY;
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));

        if (cardsRef.current) {
            cardsRef.current.addEventListener('wheel', handleWheel);
        }

        // Cleanup function to remove event listener on unmount
        return () => {
            if (cardsRef.current) {
                cardsRef.current.removeEventListener('wheel', handleWheel);
            }
        };
    }, [category]);

    return (
        <div className='title-cards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {ApiData.map((card, index) => (
                    <Link to={`/player/${card.id}`} className='card' key={index}>
                        <img src={card.backdrop_path ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}` : 'fallback-image-url.jpg'} alt='' />
                        <p>{card.original_title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TitleCards;
