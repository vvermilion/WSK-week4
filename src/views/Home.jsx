import {useState, useEffect} from 'react';
import MediaRow from '../components/MediaRow.jsx';
import SingleView from '../components/SingleView.jsx';
import { fetchData } from '../utils/fetchData.js';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API;

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  //aluksi täytyy olla empty array, muuten .map kaatuu
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
     const getMedia = async () => {
         try {
           const mediaFiles = await fetchData(MEDIA_API + '/media');
           const mediaFilesWithUsernames = await Promise.all(mediaFiles.map(async(mediaFile) => {
            const user = await fetchData(`${AUTH_API}/users/${mediaFile.user_id}`)
            return {...mediaFile, username: user.username};
          }));
           setMediaArray(mediaFilesWithUsernames);
         } catch (error) {
           console.error('Failed to fetch media:', error);
         }
     };
     getMedia();
   }, []);

 console.log(mediaArray);
  return (
    <>
      <h2 id='mymediatitle'>My Media</h2>
      <div className="media-table-wrap">
        <table className="media-table">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Description</th>
              <th>Username</th>
              <th>Created</th>
              <th>Size</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mediaArray.map((item) => (
              <MediaRow
                key={item.media_id}
                item={item}
                setItem={setSelectedItem}
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedItem && (
        <SingleView item={selectedItem} setItem={setSelectedItem} />
      )}
    </>
  );
};
export default Home;
