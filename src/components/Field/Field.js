import React, { Component } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    &::before,
    &::after {
        content: '';
        height: 1px;
        width: 0;
        bottom: 0;
        position: absolute;
        background: ${(props) => (props.error ? '#ff8191' : '#ff8c00')};
        transition: 0.2s ease all;
    }
    &::before {
        left: 50%;
    }
    &::after {
        right: 50%;
    }
`;

const StyledField = styled.div`
    position: relative;
    width: 100%;
    height: 50px;

    & label {
        position: absolute;
        display: block;
        font-size: 20px;
        font-weight: 300;
        text-align: left;
        color: #717171;
        left: 4px;
        bottom: 8px;
        transition: 0.2s ease all;
    }

    & input {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 20px;
        font-weight: 300;
        text-align: left;
        padding: 0 16px 0 0;
        margin: 0;
        -moz-appearance: textfield;
        -webkit-appearance: none;
        box-sizing: border-box;
        border: 0;
        border-bottom: 1px solid ${(props) =>
            props.error ? '#ff8191' : '#d8d8d8'};
        box-shadow: none;
        background-color: transparent;
    }

    & input::-webkit-outer-spin-button,
    & input::-webkit-inner-spin-button {
        display: none;
        margin: 0;
        -webkit-appearance: none;
    }

    & input:focus {
        outline: none;
    }

    & input:focus ~ label,
    & input:valid ~ label {
        -webkit-transform: scale(0.65, 0.65) translate(-23px, -40px);
        -moz-transform: scale(0.65, 0.65) translate(-23px, -40px);
        -ms-transform: scale(0.65, 0.65) translate(-23px, -40px);
        -o-transform: scale(0.65, 0.65) translate(-23px, -40px);
        transform: scale(0.65, 0.65) translate(-23px, -40px);
        opacity: 0.7;
        color: #000000;
    }

    & input:focus ~ ${Bar}::before, & input:focus ~ ${Bar}::after {
        width: 50%;
    }
`;

const Currency = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 24px;
    opacity: 0.7;
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    color: #000000;
`;

const Message = styled.div`
    opacity: ${(props) => (props.error ? '1' : '0')};
    color: #d0021b;
    position: absolute;
    left: 0;
    bottom: -14px;
    height: 13px;
    font-size: 11px;
    font-weight: 300;
    text-align: left;
`;

class Field extends Component {
    render() {
        return (
            <StyledField width={this.props.width}>
                <input
                    type="text"
                    id="donation-amount"
                    required
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                    value={this.props.value}
                    onInput={this.props.onInput}
                />
                <label htmlFor="donation-amount">Cумма</label>
                <Currency>₽</Currency>
                <Bar />
                <Message error={this.props.error}>{this.props.error}</Message>
            </StyledField>
        );
    }
}

export default Field;
