import React from 'react';
import styled from 'styled-components';
import { projects } from './projectsData';

const ProjectWrapper = styled.div`
    width: 100%;
    height: 50rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
`;

const StyledImg = styled.img`
    width: 50%;
    height: 100;
    box-shadow: 5px 5px 10px grey;
`;

const TextWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledTitle = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: #4a4a48;
`;

const StyledText = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: #4a4a48;
    margin-top: 2.5rem;
`;

const Project = () => {
    const projectsList = projects.map( project => {
        return (
            <ProjectWrapper key = {project.id}>
                <StyledImg src = {project.image} />
                <TextWrapper>
                    <StyledTitle> {project.title} </StyledTitle>
                    <StyledText> {project.text} </StyledText>
                </TextWrapper>
            </ProjectWrapper>
        )
    } )

    return ( 
        <>
        {projectsList}
        </>
     );
}
 
export default Project;
