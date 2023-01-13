import React, { useReducer } from 'react';

const initialState = {
    color: {
        value: '',
        error: ''
    },
    size: {
        value: '',
        error: ''
    },
};

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload
    };
}


const Input = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        
        const { name, value } = e.target;

        let error = '';
        error = checkString(value)

        dispatch({
            type: name,
            payload: { value: value, error: error }
        });
    }

    const checkString = (string) => {
        let message = '';
        if (string.length) {
            if (string.length < 2) {
                message = `El campo debe tener al menos 2 caracteres`;
            }
        }
        return message;
    }

    const getClass = (element) => {
        let className = '';
        if (element.value.length) {
            if (element.error.length) {
                className = 'is-invalid';
            } else {
                className = 'is-valid';
            }
        }
        return className;
    }


    const addBox = () => {
        props.addBox({color: state.color.value, size: state.size.value})
        reset();
    }

    const reset = () => {
        dispatch({
            type: 'color',
            payload: { value: '', error: '' }
        });
        dispatch({
            type: 'size',
            payload: { value: '', error: '' }
        });
    }
    

    return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Color</label>
                            <input
                                type="text"
                                className={`form-control ${getClass(state.color)}`}
                                name="color"
                                value={state.color.value}
                                onChange={handleChange}
                            />
                            {state.color.error.length > 0 &&
                                <small className='text-danger'>{state.color.error}</small>
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label">Size</label>
                            <input
                                type="text"
                                className={`form-control ${getClass(state.size)}`}
                                name="size"
                                value={state.size.value}
                                onChange={handleChange}
                            />
                            {state.size.error.length > 0 &&
                                <small className='text-danger'>{state.size.error}</small>
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-primary" onClick={addBox}>addBox</button>
                    </div>
                </div>
            </div>
    );
}
export default Input;