import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [LeftDie, setValue1] = useState<number>(1);
    const [RightDie, setValue2] = useState<number>(6);
    return (
        <div>
            <span data-testid="left-die">
                <Button
                    onClick={() => {
                        setValue1(d6());
                    }}
                >
                    Roll Left
                </Button>
                {LeftDie}.
            </span>
            <span data-testid="right-die">
                <Button
                    onClick={() => {
                        setValue2(d6());
                    }}
                >
                    Roll Right
                </Button>
                {RightDie}.
            </span>
            {LeftDie == RightDie && LeftDie != 1 && <p>You Win!</p>}
            {LeftDie == RightDie && LeftDie == 1 && <p>You Lose!</p>}
        </div>
    );
}
