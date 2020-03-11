import styled from 'styled-components'

export const StyledApp = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: scroll;
    background-image: url(https://wallpaperaccess.com/full/1388241.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Griffy', cursive;

`

export const StyledNav = styled.div`
    font-size: 4em;
    color: red;
    text-align: center;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: white; 
    width: 500px;
    margin-left: calc(50% - 250px);
    font-size: 1.5em;

    label {
        margin-bottom: 8px;
    }
`

export const Container = styled.div`
    background-color: rgba(50,50,50,.8);
    padding: 20px;
    border-radius: 15px;
    margin: 50px;
    border: 1px solid lightslategrey;
    text-align: center;
    width: calc(${props => props.half ? '50' : '100'}% - 150px);
`

export const StyledBtn = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 3px;
    margin: 2px;
    color: darkred;
    font-weight: 900;
    background-color: darkgrey;
    box-shadow: 0px 0px 22px darkred;
`

export const ContainerHeader = styled.div`
    font-size: 2em;
    color: white;
`

export const StyledMonsterCard = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-evenly;
    color: lightgrey;
    justify-content: space-evenly;
    padding: 10px;
    color: lightgrey;
    margin: 20px;
    border: 3px ridge #cabbbbbf;
    font-size: 1.2em;

    h3 {
        font-size: 1.75em;
    }

    > img {
        width: 200px;
        object-fit: contain;
    }
`

