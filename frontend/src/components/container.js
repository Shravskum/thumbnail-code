import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ThumbnailListing from './thumbnailListing';
import ThumbnailPreview from './thumbnailPreview';

const API_URL = process.env.REACT_APP_API_URL;

const Container = () => {
    const [thumbNails, setThumbnails] = useState([]);
    const [selectedThumb, setSelectedThumb] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        // Get thumbnail data from API
        const fetchThumbnails = async () => {
            try {
                const response = await axios.get(`${API_URL}/templates`);
                const data = response.data;
                setThumbnails(data);
                setSelectedThumb(data[0]);
                setLoading(false);
            } catch (error) {
              console.error('Error:', error);
              setError(error?.message || "Something wrong while fetching thumbnail data from api");
              setLoading(false);
              // Handle the error
            }
          };
      
        fetchThumbnails();
    }, []);
    
    const renderView = (data) => {
        return (<>
            <ThumbnailPreview selectedThumb={selectedThumb}/>
            <ThumbnailListing data={data} selectedThumb={selectedThumb} onThumbSelected={(data)=>setSelectedThumb(data)}/>
        </>);
    }
    
    if(isLoading){
        return <div>Loading</div>
    }
    if(error){
        return <div>{error}</div>
    }
    return (
        thumbNails.length > 0
        ? renderView(thumbNails)
        : (<div>No thumbnail for preview</div>)
    )
}

export default Container;