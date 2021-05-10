import './collection-item.styles.scss';
import { withRouter } from 'react-router-dom';

const CollectionItem = ({ id, name, price, imageUrl, history }) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
    </div>
)

export default withRouter(CollectionItem);