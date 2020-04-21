import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import configObj from "../utils/configObj";

export default class StackedBarChart extends React.Component{
    highchartsCallback(chart) {
        const legendArea = document.querySelector('.legendArea');

        console.log(chart.series);

        chart.series.forEach((item, index)=>{
            const myButton = document.createElement('button');
            myButton.textContent = item.name;
            myButton.style.backgroundColor = item.color;
            myButton.style.height = '25px';
            myButton.style.width = '100px';
            myButton.style.border = 'none';

            if (index > 0) {
                myButton.style.marginLeft = '16px';
            }

            if (index == 1) {
                myButton.style.color = 'white';
            }

            myButton.addEventListener('click', ()=>{
                item.setVisible(!item.visible);
                switch (myButton.style.opacity) {
                    case '':
                        return myButton.style.opacity = '0.3';
                    case '0.3':
                        return myButton.style.opacity = '1';
                    case '1':
                        return myButton.style.opacity = '0.3';
                    default:
                        break;
                }
            });

            legendArea.appendChild(myButton);
        })
    }

    render(){
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={configObj}
                callback={this.highchartsCallback}
            />
        )
    }
}
