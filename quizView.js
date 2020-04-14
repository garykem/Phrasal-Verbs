import { elements } from './base';


export function getInput() {
	let checkedElements = elements.nameAtt.map(cur => {
		return document.querySelector(`[name=${cur}]:checked`);
	});
	return checkedElements;
}


export function displayErrMsgs(i) {
	elements.errMessages[i].style.display = 'block';
}

export function deleteErrMsgs(i) {
	elements.errMessages[i].style.display = 'none';

}


export function deleteNote(errMsgIndex) {
	if (errMsgIndex === -1) {
		elements.note.style.display = 'none';
	}
}


export function displayNote() {
	elements.note.style.display = 'inline-block';
}

export function feedback(checkedElements) {
	checkedElements.forEach((cur, i) => {
		if (cur.dataset.answer === 'true') {
			cur.parentElement.classList.add('activeGreen');

		} else if (cur.dataset.answer === 'false') {
			cur.parentElement.classList.add('activeRed');
			elements.correctAns[i].style.color = 'blue';
			elements.correctAns[i].style.display = 'block';
		}
	});
}
export function displayScore(score) {
	elements.scoreContainer.style.display = 'block';
	// elements.yourScore.innerHTML = score;
	// let ansLength = chkElements.length;
	console.log(elements.correctAns.length)

	console.log(score)
	elements.yourScore.innerHTML = `${score} / ${elements.correctAns.length}`;
	
}

export function displayComment(score) {
	elements.scoresArray.forEach((cur, i) => {
		if (cur === score) {
			elements.commentContainer.style.display = 'block';
			elements.commentContainer.innerHTML = elements.comments[i];
		}
	})
}

// export function displayCorrectAnswer() {
// 	elements.correctAns.forEach(cur => {
		
// 	});		
// }

export function displayResetBtn() {
	elements.resetBtn.style.display = 'block';
}


export function resetUi() {
	elements.checkBtn.disabled = false;

	elements.errMessages.forEach((cur, i) => {
		cur.style.display = 'none';
		elements.correctAns[i].style.display = 'none';
	});

	elements.inputs.forEach(cur => {
		cur.checked = false;
		cur.disabled = false;
		cur.parentElement.classList.remove('activeGreen');
		cur.parentElement.classList.remove('activeRed');
	})

	elements.commentContainer.style.display = 'none';
	elements.scoreContainer.style.display = 'none';
	elements.resetBtn.style.display = 'none';
}





















