import React from 'react';
import Login from '../Login';
import {Container} from '../Login/loginStyle'
import {  
    Form, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Icon, 
    Text,
    ImgB,
    ImgBg
    
} from '../Login/loginStyle'





const LogIn = ()=>{
    console.log("Log in rendered")
    return(
        <Container>
            <Login/>
            <div>

                <fieldset>
                <Form action='#'>
                    <FormContent>
                    <FormLabel> EMAIL/PHONE NUMBER<br/></FormLabel>
                    <FormInput type='email' name='Email' placeholder='Email' required onChange/>
                    <FormLabel> PASSWORD<br/></FormLabel>
                    <FormInput type='password' name='Password' placeholder='Password' required onChange/>
                    <FormButton onSubmit>Log in</FormButton>

                    <Text>Cant sign in? Reset password </Text>
                    </FormContent>
               
                </Form>
                </fieldset>

            </div>
        </Container>

       
    );
};
export default LogIn;