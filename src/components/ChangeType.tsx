import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const QuestionTypeSwap: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question",
    };
    const [Type, setType] = useState<QuestionType>("short_answer_question");
    function ChangeQuestionType(): void {
        const newType = QuestionTypeSwap[Type];
        setType(newType);
    }
    return (
        <div>
            Current Type:{" "}
            <span>
                {Type == "short_answer_question" && (
                    <p>Short Answer Question</p>
                )}
                {Type == "multiple_choice_question" && (
                    <p>Multiple Choice Question</p>
                )}
            </span>
            <Button onClick={ChangeQuestionType}>Change Type</Button>
        </div>
    );
}
