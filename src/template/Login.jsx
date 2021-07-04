import React,{useState,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextInput } from '../Buttons'
import {PrimaryButton} from '../Buttons/index';
// import {AuthContext} from '../Auth'
// import { Redirect } from "react-router-dom";
import { auth } from "../config/firebase";

const useStyles = makeStyles(() => ({
    root: {
        margin: "0 auto"
    },
    name: {
        color: "#276678",
        fontSize: "30px",
        fontWeight: "bold"
    }
}));

const Login = ({history}) => {
    // const user = useContext(AuthContext);
    const classes = useStyles();
    const [email, setEmail] = useState(""),
          [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/");
            })
            .catch((er) => {
                console.log(er)
            });
    };

    
    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    },[setEmail]);

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    },[setPassword]);

    return (
        <div className="login_container">
        <div className="module-spacer-medium" />
        <div className="login_handline login_text_center">
            <h1 className={classes.name}>ログイン</h1>
        </div>
            <form onSubmit={handleSubmit}>
            <div className="module-spacer-medium"/>
                <div>
                    <TextInput
                        fullWidth={true}
                        label={"メールアドレス"}
                        multiline={false}
                        required={true}
                        rows={1}
                        value={email}
                        type={"email"}
                        onChange={inputEmail}
                    />
                    <TextInput
                        fullWidth={true}
                        label={"パスワード"}
                        multiline={false}
                        required={true}
                        rows={1}
                        value={password}
                        type={"password"}
                        onChange={inputPassword}
                    />
                    <div className="module-spacer-medium" />
                    <div className="login_center">
                    <PrimaryButton label={"ログインする"} />
                    </div>
                    <div className="module-spacer-medium" />
                    <div className="module-spacer-medium" />
                    <p className="login_center" onClick={() => history.push('./signup')}>アカウントをお持ちでない方はこちら</p>
                </div>
            </form>
        </div>
    )
}


export default Login;
