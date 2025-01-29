import React from 'react';
import {useNavigate} from 'react-router'; // Corrected import
import {Dropdown} from 'rsuite';

export const BottomNav = ({background}) => {
  const navigate = useNavigate();
  const BottomNavData = [
    {
      activeClass: '',
      titleLink: '/login',
      title: 'Hero',
      subMenu: [
        {
          background: '',
          subMenuTitle: 'bike',
        },
      ],
    },
  ];

  return (
    <>
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
              //   trigger="hover"
              defaultOpen="true">
              <div className="BottomNav_DropdownDiv">
                {val.subMenu.map((val, i) => (
                  <div
                    key={i}
                    className="BottomNav_DropdownDivInner"
                    style={{background: val.background || '#FFF'}}>
                    <div className="BottomNav_DropdownDivInnerTitle">
                      {val.subMenuTitle}
                    </div>
                    <Dropdown.Item onClick={() => navigate('/login')}>
                      Xtreme 160R Disc
                    </Dropdown.Item>
                  </div>
                ))}
              </div>
            </Dropdown>
          )}
        </div>
      ))}
    </>
  );
};
