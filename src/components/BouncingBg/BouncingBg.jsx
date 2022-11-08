import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 100%;
    background: var(--background);
`


const BouncingBg = () => {

    const canvasRef = useRef();

    let x, y;
    let dx = 2;
    let dy = -2;
    var balls;

    useEffect(() => {
        console.log(canvasRef.current.getContext("2d"))
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;


        balls = [{
            "x": Math.random() * (canvasRef.current.width - 0) + 0,
            "y": Math.random() * (canvasRef.current.height - 0) + 0 - 50,
            "r": 50
        },
        {
            "x": Math.random() * (canvasRef.current.width - 0) + 0,
            "y": Math.random() * (canvasRef.current.height - 0) + 0 - 80,
            "r": 80,
        }, {
            "x": Math.random() * (canvasRef.current.width - 0) + 0,
            "y": Math.random() * (canvasRef.current.height - 0) + 0 - 30,
            "r": 30
        }, {
            "x": Math.random() * (canvasRef.current.width - 0) + 0,
            "y": Math.random() * (canvasRef.current.height - 0) + 0 - 50,
            "r": 50
        },
        {
            "x": Math.random() * (canvasRef.current.width - 0) + 0,
            "y": Math.random() * (canvasRef.current.height - 0) + 0 - 80,
            "r": 80,
        }, {
            "x": Math.random() * (canvasRef.current.width - 0) + 0,
            "y": Math.random() * (canvasRef.current.height - 0) + 0 - 30,
            "r": 30
        }];
    }, [])


    function drawBall() {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        balls.forEach(ball => {
            // console.log(ball)
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
            var grd = ctx.createLinearGradient(0, 0, canvasRef.current.width, canvasRef.current.height);
            grd.addColorStop(0, "red");
            grd.addColorStop(0.5, "blue");
            grd.addColorStop(1, "purple");
            ctx.fillStyle = grd;
            ctx.fill();
            ctx.closePath();


            if (ball.x + dx > window.innerWidth - ball.r || ball.x + dx < ball.r) {
                dx = -dx;
            } else if (ball.y + dy > window.innerHeight - ball.r || ball.y + dy < ball.r) {
                dy = -dy;
            }

            ball.x += dx;
            ball.y += dy;
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