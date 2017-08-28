/*
Copyright 2017 KiKe. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as React from 'react';
import {Component} from 'react';
import './style/input.scss';

export interface InputProps {
    placeHolder: string;
    type: string;
}

export interface InputState {
}

export default class Input extends Component<InputProps, InputState> {

    constructor() {
        super();
    }

    public render(): JSX.Element | null {
        return (
            <div className='input-field-container'>
                <input className='input-field'
                       type={this.props.type}
                       placeholder={this.props.placeHolder}
                />
            </div>
        );
    }
}
