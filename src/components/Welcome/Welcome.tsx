import * as React from 'react';
import * as api from '../../services/api';
import {Component} from 'react';
import './style/welcome.scss';

// Applications Components
import Button from '../Button/Button';
import Input from '../Input/Input';

api.config.readConfig().then((data) => {
    console.log(data);
});

export interface WelcomeProps {
}

export interface WelcomeState {
}

export class Welcome extends Component<WelcomeProps, WelcomeState> {

    constructor() {
        super();
    }

    public render(): JSX.Element | null {
        return (
            <div className='content'>
                <h1 className='title'>Graphic Design <br/> in 10 Hours</h1>
                <div className='bottom-triangle'>
                </div>
                <div className='button-container'>
                    <Input placeHolder='User Name' type='text'/>
                    <Button buttonText='SAVE'/>
                </div>
            </div>
        );
    }
}
