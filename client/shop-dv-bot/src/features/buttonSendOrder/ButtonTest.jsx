import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { IService } from '../../app/slices/servicesSlice';
import { RootState } from '../../app/store';
import { StyledButtonSendOrder } from './buttonSendOrder.style';
import { useTGWebApp } from '../../hook/useTGWebApp.js';

export const ButtonTest = () => {

    const { tg, user, queryId } = useTGWebApp();
    const cart = useSelector( (state) => state.cart);

    const [ dataTelegramBot, setDataTelegramBot ] = useState('');

    useEffect( () => {
      // setDataTelegramBot(window.Telegram!.WebApp);
      // window.Telegram.webApp
      // window.Telegram! && setDataTelegramBot(window.Telegram!.WebApp);
        setDataTelegramBot(tg);
        console.log('tg: ', tg);
        console.log('user: ', user);
        console.log('queryId: ', queryId);

        console.log(window);
    }, [tg, user, queryId]);

    const sendDataToBot = (cart) => {

        console.log('FROM send FN : tg: ', tg);
        console.log('FROM send FN : user: ', user);
        console.log('FROM send FN : queryId: ', queryId);

        console.log(dataTelegramBot);
        console.log(JSON.stringify(cart));
        // const queryID = dataTelegramBot.initDataUnsafe?.query_id;
        dataTelegramBot.sendData(JSON.stringify(cart));

        fetch('http://localhost:3000/').then(res => {console.log('first then from GET', res); return res}).then(json => console.log('second then GET', json)).catch( err => console.log(err));

        fetch('http://localhost:3000/send_bot', {
            method: 'POST',
            body: JSON.stringify({cart, queryId, user}),
            headers: {
                'Content-Type': 'application/json',
                
            },
            
            
        }).then( res => {console.log('first then from POST', res); return res}).then(json => console.log('second then POST', json)).catch( err => console.log(err));
        // http://localhost:3000/
    };

    // {mode: 'no-cors'}
    // mode: 'no-cors',

    // 'Accept': 'application/json',
    // 'Origin': 'http://localhost:3000',
    // 'Access-Control-Allow-Origin': 'http://localhost:3000',

    return (
        <StyledButtonSendOrder onClick={() => sendDataToBot(cart)}>
        Send order to Telegram Bot JSX
        </StyledButtonSendOrder>
    );
    };