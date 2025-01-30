import React from 'react';
import {useNavigate} from 'react-router'; // Corrected import
import {Dropdown, Accordion, Placeholder} from 'rsuite';
import {BottomNavData} from '../Data';
export const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="BottomNavTop_Div d-none d-xxl-block d-xl-block d-lg-block">
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

export const BottomNavMobile = () => {
  const navigate = useNavigate();

  return (
    <>
      {BottomNavData.map((val, i) => (
        <div
          className="BottomNavMobile_div d-block d-xxl-none d-xl-none d-lg-none"
          key={i}>
          {val.activeClass === 'normal' ? (
            <div className={`BottomNavDiv ${val.activeClass}`}>
              <Dropdown
                title={<span>{val.title}</span>}
                className="NavHoverBtn"
                onClick={() => navigate(val.titleLink)}
              />
            </div>
          ) : (
            <Accordion>
              <Accordion.Panel
                header={
                  <span className="BottomNavMobile_divTitle">{val.title}</span>
                }
                eventKey={i}>
                {val.subMenu.map((subVal, j) => (
                  <Accordion key={j}>
                    <Accordion.Panel header={subVal.subMenuTitle} eventKey={j}>
                      <div className="BottomNavTop_Div BottomNavDiv">
                        {subVal.Item.map((item, k) => (
                          <Dropdown
                            key={k}
                            title={<span>{item.itemName}</span>}
                            className="NavHoverBtn"
                            onClick={() => navigate(item.itemLink)}
                          />
                        ))}
                      </div>
                    </Accordion.Panel>
                  </Accordion>
                ))}
              </Accordion.Panel>
            </Accordion>
          )}
        </div>
      ))}
    </>
  );
};
