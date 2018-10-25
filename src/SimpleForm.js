import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
    //handleSubmit是处理提交的一个函数，接收三个参数：values（保存表单数据的对象），dispatch和props（传递给自定义表单组件的属性）
    //pristine是一个布尔型的值，表单中无输入值为true，否则为false
    //reset是一个函数，调用reset()可以清空表单
    //submitting是一个布尔型的值，表单正在提交时为true
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit = { handleSubmit }>
            <div>
                <label htmlFor = "firstName">First Name</label>
                <Field 
                    name = "firstName" 
                    component = "input" 
                    type = "text" 
                    placeholder = "First Name"
                />
            </div>
            <div>
                <label htmlFor = "lastName">Last Name</label>
                <Field 
                    name = "lastName" 
                    component = "input" 
                    type = "text" 
                    placeholder = "Last Name"
                />
            </div>
            <div>
                <label htmlFor = "email">Email</label>
                <Field 
                    name = "email" 
                    component = "input" 
                    type = "email" 
                    placeholder = "Email"
                />
            </div>
            <div>
                <label htmlFor = "sex">Sex</label>
                <div>
                    <label>
                        <Field
                            name = "sex"
                            component = "input"
                            type = "radio"
                            value = "male"
                        />
                        {' '}
                        Male
                    </label>
                    <label>
                        <Field
                            name = "sex"
                            component = "input"
                            type = "radio"
                            value = "female"
                        />
                        {' '}
                        Female
                    </label>
                </div>
            </div>
            <div>
                <label htmlFor = "favoriteColor">Favorite Color</label>
                <div>
                    <Field name = "favoriteColor" component = "select">
                        <option />
                        <option value = "ff0000">Red</option>
                        <option value = "00ff00">Green</option>
                        <option value = "0000ff">Blue</option>
                    </Field>
                </div>
            </div>
            <div>
                <label htmlFor = "employed">Employed</label>
                <div>
                    <Field
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </div>
            <div>
                <label htmlFor = "notes">Notes</label>
                <div>
                    <Field 
                        name="notes" 
                        component="textarea" 
                    />
                </div>
            </div>
            <div>
                <button type = "submit" disabled = {pristine || submitting}>
                    Submit
                </button>
                <button type = "button" disabled = {pristine || submitting} onClick = {reset}>
                    Reset
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    //给这个表单命名标记
    form: 'simple'
})(SimpleForm);