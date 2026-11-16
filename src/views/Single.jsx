import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state;
  const navigate = useNavigate();
  return (
    <section className="single-view">
      {item.media_type.startsWith('image') ? (
        <img
          id="image"
          src={item?.filename}
          alt={item?.title}
          style={{maxWidth: '100%'}}
        />
      ) : (
        <video id="video" controls width="100%">
          <source src={item?.filename} type={item.media_type} />
          Your browser does not support the video tag.
        </video>
      )}

      <p className="single-description">
        {item.description ? item.description : 'No description'}
      </p>
      <button
        className="single-back-button"
        type="button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </section>
  );
};

export default Single;
