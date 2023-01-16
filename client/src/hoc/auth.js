import { Axios } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function (SpecipicComponent, option, adminRoute = null) {

    //option

    //null  -> 아무나 출입 가능
    //trur  -> 로그인한 유저만 출입가능
    //false -> 로그인한 유저는 출입 불가능

    function AuthenticationCheck(props) {

        const dispatch = useDispatch();

        const navigate = useNavigate();

        useEffect(() => {
            
            dispatch(auth()).then(response => {
                console.log(response);
            })

            
        }, [])
    }

    return AuthenticationCheck
}