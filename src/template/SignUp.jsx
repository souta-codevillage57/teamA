import React,{useState,useCallback} from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextInput } from '../Buttons'
import { auth } from "../config/firebase";
import {PrimaryButton} from '../Buttons/index'

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

const SignUp = ({history}) => {
    const classes = useStyles();
    const [email, setEmail] = useState(""),
          [name, setName] = useState(""),
          [password, setPassword] = useState(""),
          [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName:name
                })
                history.push("/");
            })
            .catch((er) => {
                console.log(er)
            });
    };

    const inputName = useCallback((e) => {
        setName(e.target.value)
    },[setName])

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    },[setEmail])

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    },[setPassword])

    const inputConfirmPassword = useCallback((e) => {
        setConfirmPassword(e.target.value)
    },[setConfirmPassword])

    return (
        <div className="signup_container">
            <div className="module-spacer-medium" />
            <div className="signup_handline signup_text_center">
                <h1 className={classes.name}>サインアップ</h1>
                </div>
                <div className="module-spacer-medium" />
                <form onSubmit={handleSubmit}>
                <div className="module-spacer-medium">
                    <TextInput
                        fullWidth={true}
                        label={"名前"}
                        multiline={false}
                        required={true}
                        rows={1}
                        value={name}
                        type={"text"}
                        onChange={inputName}
                    />
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
                    <TextInput
                        fullWidth={true}
                        label={"パスワード(確認)"}
                        multiline={false}
                        required={true}
                        rows={1}
                        value={confirmPassword}
                        type={"password"}
                        onChange={inputConfirmPassword}
                    />
                    <div className="module-spacer-medium" />
                    <div className="signup_center">
                        <PrimaryButton label={"アカウントを登録する"} />
                    </div>
                    <div className="module-spacer-medium" />
                    <div className="module-spacer-medium" />
                    <p className="signup_center" onClick={() => history.push('./login')}>アカウントをお持ちの方はこちら</p>
                </div>
                </form>
        </div>
            
    )
}

export default SignUp;