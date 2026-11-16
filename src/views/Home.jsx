import {useState, useEffect} from 'react';
import MediaRow from '../components/MediaRow.jsx';
import MyComponent from '../components/MyComponent.jsx';
import SingleView from '../components/SingleView.jsx';
import { fetchData } from '../utils/fetchData.js';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  //aluksi täytyy olla empty array, muuten .map kaatuu
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
     const getMedia = async () => {
         try {
           const json = await fetchData(MEDIA_API + '/media');
           setMediaArray(json);
         } catch (error) {
           console.error('Failed to fetch media:', error);
         }
     };
     getMedia();
   }, []);

 console.log(mediaArray);
  return (
    <>
      <MyComponent />
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
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
      {selectedItem && (
        <SingleView item={selectedItem} setItem={setSelectedItem} />
      )}
    </>
  );
};
export default Home;
