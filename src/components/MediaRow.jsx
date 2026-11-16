import PropTypes from 'prop-types';
import { Link } from 'react-router';

const MediaRow = (props) => {
  const {item, setItem} = props;
  return (
    <tr className="media-row" key={item.media_id} onClick={() => setItem(item)}>
      <td>
        <img src={item.thumbnail} alt={item.title}></img>
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td className="media-date">
        {new Date(item.created_at).toLocaleString('fi-FI')}
      </td>
      <td>{item.filesize}</td>
      <td className="media-type">{item.media_type}</td>
      <td>
        <button type="button" onClick={() => setItem(item)}>
          <Link to="/single" state={item}>
            Show
          </Link>
        </button>
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
