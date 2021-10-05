import React from 'react';
import {Feather} from '@expo/vector-icons';
import { BackButton, Name } from './ModalLink.styles';
import { theme } from '../../global/theme';
import {WebView} from 'react-native-webview';

export function ModalLink({link, title, closeModal}) {
    return (
        <>
            <BackButton onPress={closeModal}>
                <Feather name="x" size={35} color={theme.color.white}/>
                <Name numberOfLines={1}>{title}</Name>
            </BackButton>
            
            <WebView 
                source={{uri: link}}
            />
        </>
    )
}
