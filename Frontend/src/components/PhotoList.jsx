import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PhotoList() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/photos')
      .then((response) => {
        console.log('Photos: ', response.data);
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  return (
    <div className="w-full grid grid-cols-1 gap-4 p-4">
      {photos.map((photo) => (
        <div key={photo.id} className="border p-2">
          <img src={photo.image} alt={photo.title} className="w-full h-auto" />
          <h3 className="text-lg font-bold">{photo.title}</h3>
          <p>{photo.description}</p>
        </div>
      ))}
    </div>
  );
}
