import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import geometry from './../assets/geometry.jpg'
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background: url(${geometry}) no-repeat fixed bottom;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className='jumbo'>
                <div className='overlay'></div>
                <Container>
                    <h1>Example React-bootstrap</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad at delectus ea eaque
                        earum
                        eveniet facere fugiat illo magni nisi, nobis, optio porro repellat sed voluptate voluptatem.
                        Dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad at
                        delectus ea eaque earum eveniet facere fugiat illo magni nisi, nobis, optio porro repellat sed
                        voluptate voluptatem. Dignissimos.
                    </p>
                </Container>
            </Jumbo>
        </Styles>
    );
};

export default Jumbotron;