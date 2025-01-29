import Gift from '../../images/gift.svg';
import {TopNavBarMessage} from '../Data';

export const TopNavBar = () => {
  return TopNavBarMessage ? (
    <div className="TopNav_barDiv">
      <span>
        <img src={Gift} alt="Gift" />
        {TopNavBarMessage}
      </span>
    </div>
  ) : null;
};
