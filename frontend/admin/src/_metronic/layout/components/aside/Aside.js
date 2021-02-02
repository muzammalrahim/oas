/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useState } from "react";
import objectPath from "object-path";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { toAbsoluteUrl } from "../../../_helpers";
import { LanguageSelectorDropdown } from "../extras/dropdowns/LanguageSelectorDropdown";
import { Brand } from "../brand/Brand";
import { KTUtil } from "./../../../_assets/js/components/util";
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE } from '../../../../app/pages/helper/api'

export function Aside() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      asideClassesFromConfig: uiService.getClasses("aside", true),
      asideSecondaryDisplay: objectPath.get(
        uiService.config,
        "aside.secondary.display"
      ),
      asideSelfMinimizeToggle: objectPath.get(
        uiService.config,
        "aside.self.minimize.toggle"
      ),
      extrasSearchDisplay: objectPath.get(
        uiService.config,
        "extras.search.display"
      ),
      extrasNotificationsDisplay: objectPath.get(
        uiService.config,
        "extras.notifications.display"
      ),
      extrasQuickActionsDisplay: objectPath.get(
        uiService.config,
        "extras.quick-actions.display"
      ),
      extrasQuickPanelDisplay: objectPath.get(
        uiService.config,
        "extras.quick-panel.display"
      ),
      extrasLanguagesDisplay: objectPath.get(
        uiService.config,
        "extras.languages.display"
      ),
      extrasUserDisplay: objectPath.get(
        uiService.config,
        "extras.user.display"
      ),
    };
  }, [uiService]);

  const tabs = {
    tabId1: "kt_aside_tab_1",
    tabId2: "kt_aside_tab_2",
  };
  const [activeTab, setActiveTab] = useState(tabs.tabId1);
  const handleTabChange = (id) => {
    setActiveTab(id);
    const asideWorkspace = KTUtil.find(
      document.getElementById("kt_aside"),
      ".aside-secondary .aside-workspace"
    );
    if (asideWorkspace) {
      KTUtil.scrollUpdate(asideWorkspace);
    }
  };

  return (
    <>
      {/* begin::Aside */}
      <div>
        {/* begin::Primary */}
        <div className="aside-primary d-flex flex-column align-items-center flex-row-auto">
          <Brand />
          {/* begin::Nav Wrapper */}
          <div className="aside-nav d-flex flex-column align-items-center flex-column-fluid py-5 scroll scroll-pull">
            {/* begin::Nav */}
            <ul className="list-unstyled flex-column" role="tablist">
              {/* begin::Item */}
              <li
                className="nav-item mb-3"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                title="Inventory"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="latest-project">Inventory</Tooltip>
                  }
                >
                  <NavLink
                    to={"/"+ADMIN_ROUTE+'/products'}
                    className={`nav-link btn btn-icon btn-clean btn-lg ${activeTab ===
                      tabs.tabId1 && "active"}`}
                  >
                    <span className="svg-icon svg-icon-lg">
                      <SVG
                        src={toAbsoluteUrl(
                          "/static/media/svg/icons/Layout/Layout-4-blocks.svg"
                        )}
                      />
                    </span>
                  </NavLink>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className="nav-item mb-3"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                title="Customers"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="metronic-features">Customers</Tooltip>
                  }
                >
                  <NavLink
                    to={"/"+ADMIN_ROUTE+'/customers'}
                    className={`nav-link btn btn-icon btn-clean btn-lg ${activeTab ===
                      tabs.tabId2 && "active"}`}
                  >
                    <span className="svg-icon svg-icon-lg">
                      <SVG
                        src={toAbsoluteUrl(
                          "/static/media/svg/icons/Communication/Group.svg"
                        )}
                      />
                    </span>
                  </NavLink>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className="nav-item mb-3"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                title="Requests"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="latest-reports">Suppliers</Tooltip>
                  }
                >
                  <NavLink
                    to={"/"+ADMIN_ROUTE+"/products"}
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_3"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-lg">
                      <SVG
                        src={toAbsoluteUrl(
                          "/static/media/svg/icons/Media/Equalizer.svg"
                        )}
                      />
                    </span>
                  </NavLink>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

               {/* begin::Item */}
               <li
                className="nav-item mb-3"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                title="Requests"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="latest-reports">Enquiries</Tooltip>
                  }
                >
                  <NavLink
                    to={"/"+ADMIN_ROUTE+"/customers"}
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_3"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-lg">
                      <SVG
                        src={toAbsoluteUrl(
                          "/static/media/svg/icons/Media/Equalizer.svg"
                        )}
                      />
                    </span>
                  </NavLink>
                </OverlayTrigger>
              </li>
              {/* end::Item */}
               {/* begin::Item */}
               <li
                className="nav-item mb-3"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                title="Requests"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="latest-reports">Product Categories</Tooltip>
                  }
                >
                  <NavLink
                    to={"/"+ADMIN_ROUTE+"/products"}
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_3"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-lg">
                      <SVG
                        src={toAbsoluteUrl(
                          "/static/media/svg/icons/Media/Equalizer.svg"
                        )}
                      />
                    </span>
                  </NavLink>
                </OverlayTrigger>
              </li>
              {/* end::Item */}
               {/* begin::Item */}
               <li
                className="nav-item mb-3"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                title="Requests"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="latest-reports">Manufacturers</Tooltip>
                  }
                >
                  <NavLink
                    to={"/"+ADMIN_ROUTE+"/customers"}
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_3"
                    role="tab"
                  >
                    <span className="svg-icon svg-icon-lg">
                      <SVG
                        src={toAbsoluteUrl(
                          "/static/media/svg/icons/Media/Equalizer.svg"
                        )}
                      />
                    </span>
                  </NavLink>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

              {/* begin::Item */}
              <li
                className="nav-item mb-3"
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                title="Settings"
              >
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="project-management">
                      Settings
                    </Tooltip>
                  }
                >
                  <NavLink
                    to={"/"+ADMIN_ROUTE+'/builder'}
                    className="nav-link btn btn-icon btn-clean btn-lg"
                    data-toggle="tab"
                    data-target="#kt_aside_tab_4"
                    role="tab"
                  >
                    <span className="flaticon2-gear">
                      {/* <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Shield-check.svg"
                        )}
                      /> */}
                    </span>
                  </NavLink>
                </OverlayTrigger>
              </li>
              {/* end::Item */}

            </ul>
            {/* end::Nav */}
          </div>
          {/* end::Nav Wrapper */}

          {/* begin::Footer */}
          <div className="aside-footer d-flex flex-column align-items-center flex-column-auto py-4 py-lg-10">
            {/* begin::Aside Toggle */}
        
            {/* end::Aside Toggle */}

            {/* begin::Search */}
            {layoutProps.extrasSearchDisplay && (
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="toggle-search">Quick Search</Tooltip>}
              >
                <a
                  href="#"
                  className="btn btn-icon btn-clean btn-lg mb-1"
                  id="kt_quick_search_toggle"
                >
                  <span className="svg-icon svg-icon-lg">
                    <SVG
                      src={toAbsoluteUrl("/static/media/svg/icons/General/Search.svg")}
                    />
                  </span>
                </a>
              </OverlayTrigger>
            )}
            {/* end::Search */}

            {/* begin::Notifications */}
            {layoutProps.extrasNotificationsDisplay && (
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="toggle-notifications">Notifications</Tooltip>
                }
              >
                <a
                  href="#"
                  className="btn btn-icon btn-clean btn-lg mb-1 position-relative"
                  id="kt_quick_notifications_toggle"
                  data-placement="right"
                  data-container="body"
                  data-boundary="window"
                >
                  <span className="svg-icon svg-icon-lg">
                    <SVG
                      src={toAbsoluteUrl("/static/media/svg/icons/Design/Layers.svg")}
                    />
                  </span>
                </a>
              </OverlayTrigger>
            )}
            {/* end::Notifications */}


            {/* begin::Languages*/}
            {layoutProps.extrasLanguagesDisplay && <LanguageSelectorDropdown />}
            {/* end::Languages */}

          </div>
          {/* end::Footer */}
        </div>
        {/* end::Primary */}

      </div>
      {/* end::Aside */}
    </>
  );
}
