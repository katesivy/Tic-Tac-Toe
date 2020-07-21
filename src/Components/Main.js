import React, { useState } from 'react';


export default function Main() {
    // const [clickData, setClickData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    // const [turn, setTurn] = useState(0);
    // const [clicks, setClicks] = useState(0);
    // const [players, setPlayers] = useState["", "X", "0"];
    // const [winConditions, setWinConditions] = useState[
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    // ];
    var clickData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var turn = 0;
    var clicks = 0;
    // 0 =  nothing clicked, 1 = X, 2 = O
    var players = ["", "X", "0"];
    var winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    //     button.addEventListener('click', restart);

    // function createGrid() {
    //     var k = 0;
    //     for (var i = 0; i < 3; i++) {
    //         var row = document.createElement("div");
    //         row.setAttribute('id', 'row' + i);
    //         row.className = "row";
    //         // mx-lg-n5 mx-sm-2";
    //         for (var j = 0; j < 3; j++) {
    //             var col = document.createElement("div");
    //             col.setAttribute('id', k);
    //             // set up click event for squares
    //             col.addEventListener('click', clickSquare);
    //             col.className = "col-lg-4  text-center p-4 border border-dark bg-light color-primary";
    //             row.appendChild(col);
    //             k++;
    //         }
    //         grid.appendChild(row);
    //     }
    // }
    let display = '';
    const displayX = <>
        <p>"X"</p>
            </>
    let displayO = "O";

    function clickSquare(e) {

        console.log('clicked');
        // set state
        clickData = Number(turn) + 1; // 0, 1 -> 1,2
        console.log(clickData)
        // update view when clicked 
        // document.getElementById(this.id).innerHTML = players[Number(turn) + 1];
        players = [Number(turn) + 1];
        console.log(players)
        turn = !turn;

        if (clickData == 1) {
           console.log('X');
        //    removeListener('onClick', clickSquare);
        } else if (clickData == 2) {
           console.log('O');
        //    removeListener('onClick', clickSquare);
        }


        // remove click handler for square 
        removeListener();
        clicks++;
        //check for win
        checkWin();
    }

    // const clickDisplay =
    //     clickData == 1 ?
    //         <>
    //             <p>X</p>
    //         </>
    //         : clickData == 2 ?
    //             <>
    //                 <p>O</p>
    //             </>
    //             : null



    // set restart button (onclick, clear input on cols), (onclick, display player X/O button)
    // function restart() {
    //     clickData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    //     clicks = 0;
    //     turn = 0;
    //     grid.innerHTML = "";
    //     button.textContent = "";
    //     createGrid();

    // }

    //button functions w/ message and restart button

    // function showMessage(str) {
    //     button.textContent = str;
    // }
    // function to remove event listener
    function removeListener(e) {
        console.log('removed')
        for (let i = 0; i < clickData.length; i++) {
            var valueOfSquare = clickData[i];
            if (valueOfSquare != 0) {
                // var s = i;
                e.removeEventListener('onClick', clickSquare);
            }
        }
    }

    function checkWin() {
        var win = 0;
        for (let i = 0; i < winConditions.length; i++) {
            var total = 0;
            for (let j = 0; j < winConditions[i].length; j++) {
                var pos = winConditions[i][j];
                var val = clickData[pos];
                if (val == 0) {
                    break;
                } else {
                    total += val;
                    if (j == 2 && total == 3) {
                        // x wins
                        win = 1;
                    }
                    if (j == 2 && total == 6) {
                        // 0 wins
                        win = 2;
                    }
                }
            }
        }
        // if (win) {
        //     // message //restart();
        //     showMessage("Player " + players[win] + " Won!");
        //     // call function to remove event listener
        //     removeListener();
        // } else {
        //     if (clicks == 9) {
        //         // message: ("tie");  //restart();
        //         showMessage("You tied! Click here to restart.");
        //         // call function to remove event listener
        //         removeListener();
        //     }
        // }
    }
    return (
        <div className="container  ">
            <div className="row ">
                <div className="col-6 offset-3 ">
                    <h1 className=" text-center p-5">Tic Tac Toe</h1>
                </div>
            </div>

            <div className="container ">
                <div className="row ml-5">
                    <div className="col-6 offset-3">
                        <div className="row  text-center">
                            <div className="col-3 p-5 border border-secondary"
                                id="1"
                                // value={this.id}
                                onClick={(e) => clickSquare(e.target.value)}
                            >{clickData == 1 ?
                                <>
                                    <p>X</p>
                                </>
                                : clickData == 2 ?
                                    <>
                                        <p>O</p>
                                    </>
                                    : null}
                            </div>
                            <div className="col-3 p-5 border border-secondary"
                                onClick={(e) => clickSquare(e.target.value)}
                                id="2"
                            >
                            </div>
                            <div className="col-3 p-5 border border-secondary"
                                onClick={(e) => clickSquare(e.target.value)}
                                id="3"
                            >{clickData == 1 ?
                                <>
                                    <p>X</p>
                                </>
                                : clickData == 2 ?
                                    <>
                                        <p>O</p>
                                    </>
                                    : null}
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-3 p-5 border border-secondary"
                                onClick={(e) => clickSquare(e.target.value)}>
                            </div>
                            <div className="col-3 p-5 border border-secondary"
                                onClick={(e) => clickSquare(e.target.value)}>
                            </div>
                            <div className="col-3 p-5 border border-secondary"
                                onClick={(e) => clickSquare(e.target.value)}>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-3 p-5 border border-secondary"
                                onClick={(e) => clickSquare(e.target.value)}>
                            </div>
                            <div className="col-3 p-5 border border-secondary"
                                onClick={(e) => clickSquare(e.target.value)}>
                            </div>
                            <div className="col-3 p-5 border border-secondary"
                                onClick={(e) => clickSquare(e.target.value)}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
