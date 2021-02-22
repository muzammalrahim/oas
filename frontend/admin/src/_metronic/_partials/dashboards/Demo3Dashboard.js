import React from "react";
import { StatsWidget12} from "../widgets/stats/StatsWidget12";
import { StatsWidget11 } from "../widgets/stats/StatsWidget11";
import { StatsWidget10 } from "../widgets/stats/StatsWidget10";
import { StatsWidget13 } from "../widgets/stats/StatsWidget13";
export function Demo3Dashboard() {
  return (
    <>
      {/* begin::Dashboard */}
      {/* begin::Row */}
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col-xl-3">
          <div className="row">
            <div className="col-xl-12">
              <StatsWidget11
                className="gutter-b"
                symbolShape="circle"
                baseColor="danger"
                id="kt_stats_widget_11_chart_1"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="row">
            <div className="col-xl-12">
              <StatsWidget10
                className="gutter-b"
                symbolShape="circle"
                baseColor="info"
                id="kt_stats_widget_10_chart_1"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="row">
            <div className="col-xl-12">
              <StatsWidget12
                className="gutter-b"
                symbolShape="circle"
                baseColor="danger"
                id="kt_stats_widget_11_chart_2"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="row">
            <div className="col-xl-12">
              <StatsWidget13
                className="gutter-b"
                symbolShape="circle"
                baseColor="info"
                id="kt_stats_widget_10_chart_2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end::Row */}
      {/* end::Dashboard */}
    </>
  );
}
