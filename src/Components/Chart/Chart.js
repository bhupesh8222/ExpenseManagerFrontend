import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Pie, Doughnut } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart(props) {
    const { incomes, expenses } = useGlobalContext()
    const type = props.props.type;
    let Entity;

    if (type === 'Income')
        Entity = incomes;
    else
        Entity = expenses;

    const getRandomColor = () => { // Define a function to generate a random hex color code
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let incomeAmount = [], category = [], colors = [];

    for (let i = 0; i < Entity.length; i = i + 1) {
        incomeAmount.push(Entity[i].amount);
        category.push(Entity[i].title);
        colors.push(getRandomColor());
    }

    const data = {
        labels: category,
        datasets: [{
            data: incomeAmount,
            backgroundColor: colors
        }]
        // These labels appear in the legend and in the tooltips when hovering different arcs
    };

    return (
        <ChartStyled >
            <h2>{type}</h2>
            <Doughnut data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content : space-around;
`;

export default Chart