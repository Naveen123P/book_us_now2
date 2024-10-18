import styled from 'styled-components'

export const BgImage = styled.li`
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-size: cover;
    height: 100%;
    min-width: 15rem;
    // background-color: aqua;
    margin: 0px 5px;
    border-radius: 5px;
    padding: 5px;
    color: rgb(159, 166, 167);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`
export const UpcomingEventsBgImage = styled.div`
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-size: cover;
    min-height: 150px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
