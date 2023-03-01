import React from 'react';
import { useFormik, Field, FormikProvider } from 'formik';
import { LEVELS } from '../models/levels.enum';

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
        onSubmit: values => {
            addTask(values)
        },
    });
    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
            
                <p> 
                    <label htmlFor="name">Name:&nbsp;</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </p>
                <p>
                    <label htmlFor="description">Description:&nbsp;</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                </p>
                <p>
                    <label htmlFor="level">Level:&nbsp;</label>
                    <Field as="select" name="level">
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </Field>
                </p>
                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </FormikProvider>
    )
}

export default TaskFormFormik;