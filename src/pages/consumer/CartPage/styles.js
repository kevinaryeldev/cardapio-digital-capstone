import styled from 'styled-components'
export const Container = styled.main`
        max-width:100vw;
        min-height:100vh;
        background-color: var(--primary-color);
        .BtnDesktop{
            display:none;
        }
        .BtnMobile{
            display:block;
            font-size:32px;
            color:var(--primary-color-50);
        
        }
        .productImage{
                width:161px;
                height:108px;
                margin-right: 70px;
            }
    @media(min-width:1024px){
        .BtnDesktop{
        width:200px;
        height:50px;
        font-size:24px;
        font-weight:700;
        background-color: var(--primary-color);
        color:var(--terciary-color);
        display:flex;
        align-items:center;
        justify-content: center;
        }
        .BtnMobile{
            display:none;
        }
      
    }
    `
    export const Header = styled.div`
    background-color:var(--secondary-color);
    height:70px;
    width:100vw;
    `
    export const BoxHeader = styled.div`
    width:80%;
    height:70px;
    margin: 0 auto;
    display:flex;
    align-items: center;
    justify-content:space-between;  
    `
    export const Title = styled.h1`
    font-size: 16px;
    font-weight:700;
    @media (min-width:1024px){
    font-size:24px;
    }
    `
    export const BoxGroupsRequest = styled.ul`
    width:90%;
    margin:10px auto;
    border:1px solid var(--secondary-color);
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    position:relative;
    padding-bottom: 30px;
     span{
            position:absolute;
            font-size:16px;
            color: var(--terciary-color);
            bottom:5px;
            right:10px;
        }
    @media (min-width:1024px){
        width:80%;
        
        margin:30px auto;
        padding:0;
    }
    `
    export const GroupsRequestContent = styled.li`
    width: 90%;
    flex-direction:column;
    margin: 10px auto;
    display:flex;
    color:var(--secondary-color);
    @media (min-width:1024px){
    height:166px;
    display:flex;
    margin-bottom:10px;
    flex-direction:row;
    align-items:center;
    }
    `
    export const Product = styled.div`
        display:flex;
        flex-direction:column;
       
    `
    export const Time = styled.span`
    color:var(--terciary-color);
    `
    export const BoxFooter = styled.footer`
    display:flex;
    width:90%;
    align-items:center;
    justify-content:space-between;
    margin:0 10px 10px auto;
    `