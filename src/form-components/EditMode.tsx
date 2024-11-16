import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    // This is the State (Model)
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    const [editMode, setEditMode] = useState<boolean>(false);

    // This is the Control
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    // This is the View
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit?"
                checked={editMode}
                onChange={updateEditMode}
            />
            <div>
                {editMode && (
                    <Form.Group controlId="formQuestionAnswer" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setName(event.target.value);
                                }}
                            />
                        </Col>
                    </Form.Group>
                )}
            </div>
            <div>
                {editMode && (
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                )}
            </div>
            <div>
                {name} is {isStudent ? "a student" : "not a student"}.
            </div>
        </div>
    );
}
