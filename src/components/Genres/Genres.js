import React from 'react';
import { Container, Name } from './Genres.styles';

export function Genres({data}) {
    return (
        <Container>
            <Name>{data.name}</Name>
        </Container>
    )
}
