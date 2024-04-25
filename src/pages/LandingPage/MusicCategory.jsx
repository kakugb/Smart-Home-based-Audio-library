import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import bili from '../../assests/bili.jpeg'

export default function MusicCategory() {
  const [audios, setAudios] = useState([]);
  const [displayedAudios, setDisplayedAudios] = useState([]);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    async function fetchAudios() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/all/audios');
        setAudios(response.data.audios);
        setDisplayedAudios(response?.data.audios); 
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching audios:', error);
        setIsLoading(false); 
      }
    }

    fetchAudios();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play(); 
      } else {
        audioRef.current.pause(); 
      }
    }
  }, [isPlaying]);

  const playAudio = (audio) => {
   
    setSelectedAudio(audio);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };
  
  const stopAudio = () => {
    
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };



  return (
    <main className="place-items-center min-h-screen p-5">
     

      {isLoading ? ( 
        <div>Loading...</div>
      ) : (
        <div>
          {displayedAudios.length === 0 ? (
            <div>No audio found.</div>
          ) : (
            <>
            
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          
              {displayedAudios.map(audio => (
                <div key={audio.id} className="bg-gray-900 shadow-lg rounded-3xl p-3">
                  <div className="group relative mx-auto">
                    <img className="w-full md:w-72 max-h-52 block rounded mx-auto" src={bili} alt={audio.name} />
                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                      {selectedAudio === audio && isPlaying ? (
                        <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition" onClick={stopAudio}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm2.5 10.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v5zm-5 0a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v5z" />
                          </svg>
                        </button>
                      ) : (
                        <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition" onClick={() => playAudio(audio)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white text-lg">{audio.name}</h3>
                    <p className="text-gray-400">{audio.description}</p>
                  </div>
                </div>
              ))}
            </section>
            </>
          )}
        </div>
      )}
      {selectedAudio && (
        <audio ref={audioRef} src={`http://127.0.0.1:8000/audio/${selectedAudio.audio_file}`} onEnded={stopAudio} autoPlay={isPlaying} />
      )}
    </main>
  );
}