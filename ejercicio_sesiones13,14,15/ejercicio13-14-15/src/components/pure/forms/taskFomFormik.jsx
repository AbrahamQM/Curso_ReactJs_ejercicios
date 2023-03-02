import React from 'react';
import { useFormik, Field, FormikProvider , ErrorMessage} from 'formik';
import { LEVELS } from '../models/levels.enum';
import * as Yup from 'yup';
//! look this https://formik.org/docs/tutorial#schema-validation-with-yup
function TaskFormFormik (props) {

    function addTask(task){
        console.log('Added this Task:', task);
        const tempTasks = [...props.tasks];
        console.log(tempTasks )
        tempTasks.push(task);
        props.setTasks(tempTasks);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            description:'',
            level: LEVELS.NORMAL
        },
        validationSchema: Yup.object({
            name: Yup.string()
              .min(5, 'Must be 5 characters or more')
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            description: Yup.string()
                .min(5, 'Must be 5 characters or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            level:Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select one level')
                .required('Required'),
        }),
        onSubmit: values => {
            addTask(values)
        },
    });
    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
            
                <div> 
                    <p>
                        <label htmlFor="name">Name:&nbsp;</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                    </p>
                    <ErrorMessage name="name" >{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
                    
                </div>

                
                <div>
                    <p>
                        <label htmlFor="description">Description:&nbsp;</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                        />
                    </p>
                    <ErrorMessage name="description">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
                </div>
                <div>
                    <p>
                        <label htmlFor="level">Level:&nbsp;</label>
                        <Field as="select" name="level">
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                    </p>
                    <ErrorMessage name="level">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </FormikProvider>
    )
}

export default TaskFormFormik;