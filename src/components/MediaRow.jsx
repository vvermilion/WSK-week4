import PropTypes from 'prop-types';
import { Link } from 'react-router';

const MediaRow = (props) => {
  const {item, setItem} = props;
  return (
    <tr key={item.media_id} onClick={() => setItem(item)}>
      <td>
        <img src={item.thumbnail} alt={item.title}></img>
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td id="mediaDate">
        {new Date(item.created_at).toLocaleString('fi-FI')}
      </td>
      <td>{item.filesize}</td>
      <td id="mediaType">{item.media_type}</td>
      <td>
        <Link to="/single" state={item}>
          Show
        </Link>
        ADD BUTTON ABOVE
      </td>
    </tr>
  );
};
MediaRow.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    filesize: PropTypes.number.isRequired,
    media_type: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  setItem: PropTypes.func.isRequired,
};

export default MediaRow;
