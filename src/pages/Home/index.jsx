import React, { Component } from 'react';
import { MultiView} from '@ant-design/charts';
import { DataSet } from '@antv/data-set';

const DemoMultiView = () => {
  var data = [
    ['Cosmopolitan', 51, 45, 6],
    ['Martini', 67, 39, 28],
    ['Mojito', 19, 11, 8],
    ['Margarita', 47, 33, 14],
    ['Mai Tai', 32, 20, 12],
    ['Beer', 70, 20, 50],
  ]; 
  var yearData = [
    ['2010', 60, 176, 35, 25],
    ['2011', 51, 136, 25, 26],
    ['2012', 73, 196, 35, 38],
    ['2013', 84, 315, 43, 41],
    ['2014', 79, 203, 36, 33],
    ['2015', 89, 286, 41, 48],
  ];
  var config = {
    height: 500,
    padding: 'auto',
    tooltip: { showMarkers: false },
    views: [
      {
        data: data.map(function (d) {
          return {
            type: d[0],
            value: d[1],
          };
        }),
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0.5,
            y: 0.4,
          },
        },
        coordinate: {
          type: 'theta',
          cfg: { radius: 0.85 },
        },
        axes: {
          value: {
            title: { text: 'Drinks' },
            tickLine: null,
            line: false,
            ticks: false,
          },
        },
        geometries: [
          {
            type: 'interval',
            xField: '1',
            yField: 'value',
            colorField: 'type',
            mapping: {},
            adjust: { type: 'stack' },
          },
        ],
      },
      {
        data: new DataSet.DataView()
          .source(
            data.map(function (d) {
              return {
                type: d[0],
                male: d[2],
                female: d[3],
              };
            }),
          )
          .transform({
            type: 'fold',
            fields: ['male', 'female'],
            key: 'gender',
            value: 'value',
          }).rows,
        region: {
          start: {
            x: 0.5,
            y: 0,
          },
          end: {
            x: 1,
            y: 0.45,
          },
        },
        coordinate: { cfg: { isTransposed: true } },
        axes: { value: false },
        geometries: [
          {
            type: 'interval',
            xField: 'type',
            yField: 'value',
            colorField: 'gender',
            mapping: {},
            adjust: {
              type: 'dodge',
              marginRatio: 0,
            },
          },
        ],
      },
      {
        data: yearData.map(function (d) {
          return {
            year: d[0],
            ordered: d[1],
          };
        }),
        region: {
          start: {
            x: 0,
            y: 0.52,
          },
          end: {
            x: 0.48,
            y: 1,
          },
        },
        axes: { year: { title: { text: 'Drinks ordered' } } },
        meta: {
          ordered: {
            min: 40,
            max: 90,
          },
        },
        geometries: [
          {
            type: 'area',
            xField: 'year',
            yField: 'ordered',
            mapping: {},
          },
          {
            type: 'line',
            xField: 'year',
            yField: 'ordered',
            mapping: { style: { lineWidth: 0.5 } },
          },
        ],
      },
      {
        data: new DataSet.DataView()
          .source(
            yearData.map(function (d) {
              return {
                year: d[0],
                male: d[3],
                female: d[4],
              };
            }),
          )
          .transform({
            type: 'fold',
            fields: ['male', 'female'],
            key: 'gender',
            value: 'turnout',
          }).rows,
        region: {
          start: {
            x: 0.52,
            y: 0.52,
          },
          end: {
            x: 1,
            y: 1,
          },
        },
        axes: { year: { title: { text: 'Turnout by gender' } } },
        geometries: [
          {
            type: 'interval',
            xField: 'year',
            yField: 'turnout',
            colorField: 'gender',
            adjust: {
              type: 'dodge',
              marginRatio: 0,
            },
            mapping: {},
          },
        ],
      },
    ],
  };
  return <MultiView {...config} />;
};
class Home extends Component{
    render(){
        return(
            <div>
              <h2 className="title">近五年资金流水</h2>
              <DemoMultiView/>
            </div>
        )
    }
}
export default Home;