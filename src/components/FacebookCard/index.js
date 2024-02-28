//Import CSS for facebook card
import './index.css'
//Import Sir's Libraray for rendor images
import FbImageLibrary from 'react-fb-image-grid'

// Start of component
function FacebookCard(props) {

  // Destructring of props
  const { title, description, brand, price, category } = props

  return (
    <div className='App'>
      <div className='facebookCard'>
        <div className='maindiv'>

          {/* Starting Header of Card */}
          <div className='header'>
            <div className='profile-image'>
              <div className='pic'>
                <img src='https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH' />
              </div>
            </div>

            <div className='id-name'>
              <h6>
                <a href='https://www.facebook.com/waqar.rana.1253236?mibextid=ZbWKwL' target='_blank'> Waqar Rana </a>
                <br />
                <span>1 d .</span>
                <img src='https://i.pinimg.com/736x/33/0c/14/330c1457150dcef1fadc78405a762b01.jpg' />
              </h6>
            </div>

            <div className='dots'>
              <p> <sup> ... </sup><span> X </span></p>
            </div>
          </div>

          {/* Rendor descrirtion which re received through props */}
          <div className='description'>
            <p>
              <b>Title:</b> {title} <br />
              <b>Brand:</b> {brand} <br />
              <b>Description: </b>{description} <br />
              <b>Price:</b> {price} <br />
              <b>Category:</b> {category} <br />
            </p>
          </div>

          {/* Rendor images which are received throught propes using sir's library. first we import than use it */}
          <div className='image-gallery'>
            <div>
              <FbImageLibrary images={props.images} />
            </div>
          </div>

          <div className='reacts'>
            <img src="https://iconape.com/wp-content/png_logo_vector/facebook-reaction-like.png" />
            <img src="https://www.freeiconspng.com/thumbs/facebook-love-png/facebook-love-png-3.png" />
            <span>19k</span>
            <hr />
          </div>

          <div className='emojies'>
            <img className="like" src='https://www.freepnglogos.com/uploads/like-png/file-like-svg-wikimedia-commons-22.png' />
            <p className='like'>Like</p>

            <div className='reactions'>
              <img src="https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(7).gif?raw=true" />
              <img src="https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(6).gif?raw=true" />
              <img src="https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(1).gif?raw=true" />
              <img src="https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(9).gif?raw=true" />
              <img src="https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(4).gif?raw=true" />
              <img src="https://github.com/Umersiddiqui4/Pepsi-hover/blob/a9f8b7b57d6fc1dc4aac56602683ae2fc3b90713/img/1%20(3).gif?raw=true" />
            </div>

            <span>
              <img src="https://static.thenounproject.com/png/858652-200.png" />
              <p>Comment</p>
            </span>

            <span>
              <img src="https://toppng.com/uploads/preview/share-png-file-share-icon-free-download-1156313309811bbndeiii.png" />
              <p>Share</p>
            </span>
            <hr />
          </div>



          <div className='last-image'>
            <div className='picture'>
              <img src='https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH' />
            </div>
          </div>

          <div className='input-field'>
            <input type='text' placeholder='Write a comment...' />
          </div>

        </div>
      </div>
    </div>
  )
}
export default FacebookCard;
