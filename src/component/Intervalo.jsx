import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './Card';
import * as numeros from '../store/actions/numeros';

const Intervalo =  props => {
    const { min, max } = props;

    return (
        <Card title="Intervalo de Números" red>
            <div className="intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} onChange={e => props.alterarNumeroMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} onChange={e => props.alterarNumeroMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(numeros, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);