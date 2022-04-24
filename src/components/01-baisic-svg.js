import React, { useEffect } from 'react';
import * as d3 from 'd3';

const D301 = () => {
  const RenderD3 = () => {
    d3.select('body').append('p').text('Hello, D3!');
    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500)
      .attr('border-color', 'red')
      .style('border', '1px solid red');

    svg
      .append('circle')
      .attr('cx', 200)
      .attr('cy', 200)
      .attr('r', 50)
      .attr('fill', 'red');

    svg
      .append('rect')
      .attr('width', 200)
      .attr('height', 100)
      .attr('fill', 'orange');

    svg
      .append('line')
      .attr('x1', 0)
      .attr('y1', 100)
      .attr('x2', 400)
      .attr('y2', 400)
      .attr('stroke-width', 5)
      .attr('stroke', 'green');
  };
  useEffect(() => {
    RenderD3();
  }, []);
  return <></>;
};

export default D301;
