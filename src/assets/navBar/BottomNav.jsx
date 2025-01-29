import React from 'react';
import {useNavigate} from 'react-router'; // Corrected import
import {Dropdown} from 'rsuite';
import {BottomNavData} from '../Data';

export const BottomNav = ({background}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="BottomNavTop_Div">
        {BottomNavData.map((val, i) => (
          <div key={i} className={`BottomNavDiv ${val.activeClass}`}>
            {val.activeClass === 'normal' ? (
              <Dropdown
                title={<span>{val.title}</span>}
                className="NavHoverBtn"
                onClick={() => navigate(val.titleLink)}
              />
            ) : (
              <Dropdown
                title={<span>{val.title}</span>}
                className="NavHoverBtn"
                trigger="hover"
                // defaultOpen="true"
              >
                <div className="BottomNav_DropdownDiv">
                  {val.subMenu.map((subVal, j) => (
                    <div
                      key={j}
                      className="BottomNav_DropdownDivInner"
                      style={{background: subVal.background || '#FFF'}}>
                      <div className="BottomNav_DropdownDivInnerTitle">
                        {subVal.subMenuTitle}
                      </div>
                      {subVal.Item.map((item, k) => (
                        <Dropdown.Item
                          key={k}
                          onClick={() => navigate(item.itemLink)}>
                          {item.itemName}
                        </Dropdown.Item>
                      ))}
                    </div>
                  ))}
                </div>
              </Dropdown>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
