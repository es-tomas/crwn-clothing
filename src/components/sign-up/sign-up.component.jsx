import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, password, email, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, password, email, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type='text'
                        label="Display Name"
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name="email"
                        type='email'
                        label="Email"
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        name="password"
                        type='password'
                        label="Password"
                        value={password}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        name="confirmPassword"
                        type='password'
                        label="Confirm Password"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>);
    }
}

export default SignUp;