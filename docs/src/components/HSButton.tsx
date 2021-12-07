/*
 *
 *  Copyright (c) 2021 Dev Protocol
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 */

import React from 'react';
import Link from '@docusaurus/Link';

interface HSButtonProps {
    type?: string;
    color?: string;
    label?: string;
    icon?: string;
    link?: string;
    isDisabled?: boolean;
}

const HSButton: React.FC<HSButtonProps> = ({ type, color, label, icon, link, isDisabled, children }) => {
    if (!link) {
        return (
            <button className={ `hs-button${ type ? ' hs-button--' + type : '' }${ color ? ` ${ color }` : ' neutral' }` } disabled={ isDisabled }>
                <span className="hs-button__label">{ label || children }</span>
            </button>
        );
    } else {
        return (
            <Link to={ link }>
                <button className={ `hs-button${ type ? ' hs-button--' + type : '' }${ color ? ` ${ color }` : ' neutral' }` } disabled={ isDisabled }>
                    <span className="hs-button__label">{ label || children }</span>
                </button>
            </Link>
        );
    }
};

export default HSButton;