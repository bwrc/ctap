import React, { useContext } from "react";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import FuncsSettingForm from "./FuncsSettingForm"
import { Context } from './ContextProvider'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }

    },

}))

const BranchPipesForm = ({ handleLinearPipesInput }) => {
    const classes = useStyles()
    const [inputStates, dispatch] = useContext(Context);


    return (
        <Container maxWidth="sm">
            <form className={classes.root}>
                {inputStates.map((inputField, index) => (
                    <div key={inputField.id}>
                        <h4>Pipe-segment {index + 1}</h4>
                        <TextField
                            error={inputField.stepIDCheck}
                            name="stepID"
                            label="Subfunction Description Label"
                            variant="filled"
                            helperText={inputField.stepIDCheck ? 'The field cannot be empty. Please enter a value' :"describe main work in this stepSet, eg.'_load'"}
                            value={inputField.stepID}
                            onChange={event => handleLinearPipesInput(inputField.id, event)}
                        />
                        <h5>Define hierarchy</h5>
                        <TextField
                            error={inputField.subfIDCheck}
                            name="subfID"
                            label="Subfunction ID"
                            variant="filled"
                            helperText={inputField.subfIDCheck ? 'The field cannot be empty. Please enter a value' :"ID of this subfunction, eg.'pipe2'"}
                            value={inputField.subfID}
                            onChange={event => handleLinearPipesInput(inputField.id, event)}
                        />
                        <TextField
                            error={inputField.subf_srcidCheck}
                            name="subf_srcid"
                            label="Subfunction Srcid"
                            variant="filled"
                            helperText={inputField.subf_srcidCheck ? 'The field cannot be empty. Please enter a value' :"Describe the hierarchy relationship between other subfunction, you should input [Set Function ID] of the previously executed pipe, for example, if the current subfunc runs after pipe2, then the input should be 'pipe2', the first subfunc doesn't need this, leave it empty is ok."}
                            value={inputField.subf_srcid}
                            onChange={event => handleLinearPipesInput(inputField.id, event)}
                        />
                        <h5>Define pipeline</h5>
                        <FuncsSettingForm
                            indexm={index}
                            classes={classes}
                            mid={inputField.id}
                            funcsSettings={inputField.funcsSettings} />
                    </div>
                ))}
            </form>
        </Container>
    );
}

export default BranchPipesForm;