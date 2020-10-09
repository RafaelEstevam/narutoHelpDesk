import React from 'react';
import styled from 'styled-components';
import * as V from '../styles/variables';

function Task({task}){
    const taskItem = styled('div')`
        display: block;
    `
    return (
        <a href={task.url} className={taskItem}>
            <h3>{task.title}</h3> 
            <p>{task.description}</p>
        </a>
    )
}

export default Task;