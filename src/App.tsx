import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>This is header text</h1>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Emily Scott. Hello World!
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            className="Column 1"
                            style={{
                                backgroundColor: "red",
                                width: "100px",
                                height: "100px",
                            }}
                        >
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div
                            className="Column 2"
                            style={{
                                backgroundColor: "red",
                                width: "100px",
                                height: "100px",
                            }}
                        >
                            <img
                                src="https://cataas.com/cat"
                                alt="This is a random cat photo."
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
