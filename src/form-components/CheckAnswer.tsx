import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formQuestionAnswer" as={Row}>
                <Form.Label column sm={2}>
                    Answer:
                </Form.Label>
                <Col>
                    <Form.Control
                        value={answer}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setAnswer(event.target.value);
                        }}
                    />
                </Col>
            </Form.Group>
            <div>{answer == expectedAnswer && <div>/✔️/i</div>}</div>
            <div>{answer != expectedAnswer && <div>/❌/i</div>}</div>
        </div>
    );
}