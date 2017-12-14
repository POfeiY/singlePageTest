import * as React from "react";
export interface TimelineChartProps {
  data: Array<{
    x: string;
    y1: string;
    y2: string;
    y3: string;
    y4: string;
    y5: string;
    y6: string;
    y7: string;
    y8: string;
  }>;
  titleMap: { y1: string; 
  			  y2: string;
  			  y3: string;
			  y4: string;
			  y5: string;
			  y6: string;
			  y7: string;
			  y8: string; };
  height?: number;
}

export default class TimelineChart extends React.Component<
  TimelineChartProps,
  any
> {}
