import React, { Component } from 'react';
import G2 from 'g2';
import Slider from 'g2-plugin-slider';
import styles from './index.less';

class TimelineChart extends Component {
  componentDidMount() {
    this.renderChart(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.renderChart(nextProps.data);
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.slider) {
      this.slider.destroy();
    }
  }

  sliderId = `timeline-chart-slider-${Math.random() * 1000}`

  handleRef = (n) => {
    this.node = n;
  }

  renderChart(data) {
    const { height = 400, margin = [60, 40, 40, 60], titleMap, borderWidth = 2 } = this.props;

    if (!data || (data && data.length < 1)) {
      return;
    }

    // clean
    if (this.sliderId) {
      document.getElementById(this.sliderId).innerHTML = '';
    }
    this.node.innerHTML = '';

    const chart = new G2.Chart({
      container: this.node,
      forceFit: true,
      height,
      plotCfg: {
        margin,
      },
    });

    chart.axis('x', {
      title: false,
    });
    chart.axis('y1', {
      title: false,
    });
    chart.axis('y2', false);
    chart.axis('y3', false);
    chart.axis('y4', false);
    chart.axis('y5', false);
    chart.axis('y6', false);
    chart.axis('y7', false);
    chart.axis('y8', false);

    chart.legend({
      mode: false,
      position: 'top',
    });

    let max = 21000;
    // if (data[0] && data[0].y1 && data[0].y2) {
    //   max = Math.max(data.sort((a, b) => b.y1 - a.y1)[0].y1,
    //     data.sort((a, b) => b.y2 - a.y2)[0].y2);
    // }

    chart.source(data, {
      x: {
        type: 'time',
        tickCount: 10,
        
      },
      y1: {
        alias: titleMap.y1,
        max,
        min: 0,
      },
      y2: {
        alias: titleMap.y2,
        max,
        min: 0,
      },
      y3: {
        alias: titleMap.y3,
        max,
        min: 0,
      },
      y4: {
        alias: titleMap.y4,
        max,
        min: 0,
      },
      y5: {
        alias: titleMap.y5,
        max,
        min: 0,
      },
      y6: {
        alias: titleMap.y6,
        max,
        min: 0,
      },
      y7: {
        alias: titleMap.y7,
        max,
        min: 0,
      },
      y8: {
        alias: titleMap.y8,
        max,
        min: 0,
      },
    });

    chart.line().position('x*y1').color('#1890FF').size(borderWidth);
    chart.line().position('x*y2').color('#2FC25B').size(borderWidth);
    chart.line().position('x*y3').color('#666666').size(borderWidth);
    chart.line().position('x*y4').color('#3399CC').size(borderWidth);
    chart.line().position('x*y5').color('#336666').size(borderWidth);
    chart.line().position('x*y6').color('#CCFFCC').size(borderWidth);
    chart.line().position('x*y7').color('#339999').size(borderWidth);
    chart.line().position('x*y8').color('#333333').size(borderWidth);

    this.chart = chart;

    /* eslint new-cap:0 */
    const slider = new Slider({
      domId: this.sliderId,
      height: 26,
      xDim: 'x',
      yDim: 'y1',
      charts: [chart],
    });
    slider.render();

    this.slider = slider;
  }

  render() {
    const { height, title } = this.props;

    return (
      <div className={styles.timelineChart} style={{ height }}>
        <div>
          { title && <h4>{title}</h4>}
          <div ref={this.handleRef} />
          <div id={this.sliderId} />
        </div>
      </div>
    );
  }
}

export default TimelineChart;
