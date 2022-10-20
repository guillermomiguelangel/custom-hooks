import { useState } from 'react';

export const useForm = (initialForm={}) => {

    const [formValue, setFormValue] = useState(initialForm);

    const onInputChange = ({target})=>{
        const {name,value} = target;
        setFormValue({
            ...formValue,
            [ name ]: value
        })
    }

    const onFormReset = ()=>{
        setFormValue(initialForm)
    }

    return {
        ...formValue,
        formValue,
        onInputChange,
        onFormReset
    }

}
