import { FormContainer } from "./styles"

export const FormField = (props) => {
    return (
        <FormContainer onSubmit={props.formOnSubmit} method={props.formMethod}>
            {props.children}

            <button type="submit">{props.submitButtonName}</button>
        </FormContainer>
    )
}