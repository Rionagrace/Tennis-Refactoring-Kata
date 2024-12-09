"use strict";

function getScore(P1point, P2point) {
	var score = "";

	const scoreSheet = {
		0: "Love",
		1: "Fifteen",
		2: "Thirty",
		3: "Forty",
	};

	if (P1point === P2point) {
		P1point < 3 ? (score = `${scoreSheet[P1point]}-All`) : (score = "Deuce");
	}

	if (P1point >= 4 || P2point >= 4) {
		const scoreDifference = P1point - P2point;

		scoreDifference === 1 ? (score = "Advantage player1") : null;
		scoreDifference === -1 ? (score = "Advantage player2") : null;
		scoreDifference >= 2 ? (score = "Win for player1") : null;
		scoreDifference <= -2 ? (score = "Win for player2") : null;
	}

	if (
		(P1point > P2point && P1point < 4) ||
		(P2point > P1point && P2point < 4)
	) {
		score = scoreSheet[P1point] + "-" + scoreSheet[P2point];
	}

	return score;
}

module.exports = getScore;
