import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"


const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    canvas{
        z-index: 1;
        mix-blend-mode: difference;
    }
`


const BouncingBg = (props) => {

    const canvasRef = useRef();

    useEffect(() => {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
    }, [])


    function drawBall() {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        props.balls.forEach(ball => {
            const safeDistance = ball.radius / 2;
            ctx.beginPath();
            ctx.fillStyle = ball.color;
            ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
            ctx.globalCompositeOperation = "difference";

            ctx.fill();
            ctx.closePath();

            let rightTouch, bottomTouch, leftTouch, topTouch;
            function doBounceIfNeeded() {
                rightTouch = ball.x >= canvasRef.current.width - ball.radius;
                bottomTouch = ball.y >= canvasRef.current.height - ball.radius;
                leftTouch = ball.x <= ball.radius;
                topTouch = ball.y <= ball.radius;

                if (rightTouch || leftTouch) {
                    ball.toRight = !ball.toRight;
                }
                if (bottomTouch || topTouch) {
                    ball.toBottom = !ball.toBottom;
                }
            }

            if (ball.toRight && ball.toBottom) {
                ball.x += ball.dx;
                ball.y += ball.dy;
                ball.iteration++;
                if (
                    ball.iteration >= safeDistance / ball.dy - ball.radius ||
                    ball.iteration >= safeDistance / ball.dx - ball.radius
                ) {
                    doBounceIfNeeded();
                }
            } else if (!ball.toRight && ball.toBottom) {
                ball.x -= ball.dx;
                ball.y += ball.dy;
                ball.iteration++;
                if (
                    ball.iteration >= safeDistance / ball.dy - ball.radius ||
                    ball.iteration >= safeDistance / ball.dx - ball.radius
                ) {
                    doBounceIfNeeded();
                }
            } else if (!ball.toRight && !ball.toBottom) {
                ball.x -= ball.dx;
                ball.y -= ball.dy;
                ball.iteration++;
                if (
                    ball.iteration >= safeDistance / ball.dy - ball.radius ||
                    ball.iteration >= safeDistance / ball.dx - ball.radius
                ) {
                    doBounceIfNeeded();
                }
            } else if (ball.toRight && !ball.toBottom) {
                ball.x += ball.dx;
                ball.y -= ball.dy;
                ball.iteration++;
                if (
                    ball.iteration >= safeDistance / ball.dy - ball.radius ||
                    ball.iteration >= safeDistance / ball.dx - ball.radius
                ) {
                    doBounceIfNeeded();
                }
            }
        });

    }

    setInterval(drawBall, 30);

    return (
        <Container>
            <canvas ref={canvasRef}></canvas>
        </Container>
    )
}

export default BouncingBg;