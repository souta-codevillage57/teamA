import React from 'react';
import Question from './answers/Question';
import TagList from './answers/TagList';


const Answer = () => {

    const data = [
        {
            question: [
                'what?', 'how?'
            ],

            tag: [
                '()', 'const', '=>'
            ]
        }
    ]

    return (
        <div className='answer-wrap'>
            <h1 className='title'>問題解答画面</h1>
            <Question question={data.question[0]} />
            <div className="answerBox">
                <TagList tag={data.tag[0]} />
            </div>
            <button className='next-btn'>次へ</button>
        </div>

    )
}



export default Answer

