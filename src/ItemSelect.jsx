import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import firebase from 'firebase';


const ItemSelect = () => {

    const handleClick = () => {

    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#276678' }}>項目選択</h1>
            <h3 style={{ color: '#276678' }}>一覧表</h3>
            <div style={{
                display: 'inline-flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '300px'

            }}>
                <Button variant="contained" color="primary" type="submit" onClick={handleClick}>
                    <Link to='/AnswerOne' style={{ textDecoration: 'none', color: '#fff' }}>
                        ステージ1
                    </Link>
                </Button>
                <Button variant="contained" color="primary" type="submit" >
                    <Link to='/AnswerOne' style={{ textDecoration: 'none', color: '#fff' }}>
                        ステージ2
                    </Link>
                </Button>
                <Button variant="contained" color="primary" type="submit" >
                    <Link to='/AnswerOne' style={{ textDecoration: 'none', color: '#fff' }}>
                        ステージ3
                    </Link>
                </Button>
                <Button variant="contained" color="primary" type="submit" >
                    <Link to='/AnswerOne' style={{ textDecoration: 'none', color: '#fff' }}>
                        ステージ4
                    </Link>
                </Button>
                <Button variant="contained" color="secondary" type="submit" >
                    <Link to='/AnswerOne' style={{ textDecoration: 'none', color: '#fff' }}>
                        最終ステージ
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default ItemSelect;