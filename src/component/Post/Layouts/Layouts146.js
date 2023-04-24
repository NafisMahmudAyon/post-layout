// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { useParams } from 'react-router-dom';

function Layouts146(props) {
    const [data, setData] = useState({});
    const { id } = useParams();
    // const next = "https://quran-api-server.onrender.com/surah/${id}";

    useEffect(() => {
        fetch(`https://postgrid-data-api-server.onrender.com/postdata`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, [id]);
    return(
        <>{data.postTitle}</>
    )
}

export default Layouts146