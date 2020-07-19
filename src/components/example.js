import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';

//1 .card
//2 .card__title
//3 .card__title--red 

export const Card = styled.div`
    background-color: #fff;
    border: 1px solid #ccc;
`

Card.Title = styled.h1`
    font-size: 2rem;
    color: ${({ color }) => color === "red" ? "red" : "blue"};
`

import { Card } from './card';

<Card>
    <Card.Title color="red">Hello</Card.Title>
</Card>


// ----

export const CardTitle = styled.h1`
    font-size: 2rem;
    color: ${({ color }) => color === "red" ? "red" : "blue"};
`

import { Card, CardTitle } from './card';

<Card>
    <CardTitle color="red">Hello</CardTitle>
</Card>

// const ProjectList = styled.p`
//     ${props => props.appearance === "massive" ? css`
//         font-size: 200rem;
//         padding: 200000px;
//     `: css`
//         font-size: 2rem;
//         padding: 20px;
//     `}
// `;


// <ProjectList appearance="massive">Hello</ProjectList>


// function ProjectList({ children, ...rest }){
//     return <p className={styles.header} {...rest}>{children}</p>
// }



// function ProjectList({ foo, ...rest }) {
//     const [ message, setMessage ] = useState('Hello');

// 	return(<button {...rest}>{ foo }</button>)
// }


// <ProjectList foo="Hello" number={2} onClick={() => console.log('I was called outside of the component')}></ProjectList>