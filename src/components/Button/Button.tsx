/*
Copyright 2017 KiKe. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an 'AS IS' BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import * as React from 'react';
import {Component} from 'react';
import './style/button.scss';

export interface ButtonProps {
    buttonText: string;
    id: string;
}

export interface ButtonState {
}

export default class Button extends Component<ButtonProps, ButtonState> {

    constructor() {
        super();
    }

    public render(): JSX.Element | null {
        return (
            <div className='button-center'>
                <button id={this.props.id}>
                    <div className='button-outline'/>
                    <div className='button-outline button-outline--shift'/>
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}
