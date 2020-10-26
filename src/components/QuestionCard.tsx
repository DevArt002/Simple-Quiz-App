import React from 'react';
// Types
import { AnswerObject } from '../API'
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props={
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => (
<Wrapper>
  <p className="number">
    Question: {questionNr} / {totalQuestions}
  </p>
  <p dangerouslySetInnerHTML={{__html: question}}/>
  <div>
    {answers.map((answer, index) => {
      return (
        <ButtonWrapper correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} key={index}>
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}/>
          </button>
        </ButtonWrapper>)
      })}
  </div>
</Wrapper>
)


export default QuestionCard;