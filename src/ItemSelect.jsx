import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import firebase from 'firebase';


const ItemSelect = () => {

    const handleClick = () => {

    }

    return (
        <div className='item-wrap'>
            <h1>項目選択</h1>
            <h3>一覧表</h3>
            <div className='select-btn'>
                <Button className='stage-btn' variant="contained" color="primary" type="submit" onClick={handleClick}>
                    <Link to='/AnswerOne' className='link'>
                        ステージ1
                    </Link>
                </Button>
                <Button className='stage-btn' variant="contained" color="primary" type="submit" >
                    <Link to='/AnswerOne' className='link'>
                        ステージ2
                    </Link>
                </Button>
                <Button className='stage-btn' variant="contained" color="primary" type="submit" >
                    <Link to='/AnswerOne' className='link'>
                        ステージ3
                    </Link>
                </Button>
                <Button className='stage-btn' variant="contained" color="primary" type="submit" >
                    <Link to='/AnswerOne' className='link'>
                        ステージ4
                    </Link>
                </Button>
                <Button className='stage-btn' variant="contained" color="secondary" type="submit" >
                    <Link to='/AnswerOne' className='link'>
                        最終ステージ
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default ItemSelect;