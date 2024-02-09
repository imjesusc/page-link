import { reverseDataArr } from './reverse-data-arr.utilie'

export const separateColumns = posts => {
	let column1 = []
	let column2 = []

	const reversedPosts = reverseDataArr(posts)

	for (let i = 0; i < reversedPosts.length; i++) {
		if (i % 2 === 0) {
			column1.push(reversedPosts[i])
		} else {
			column2.push(reversedPosts[i])
		}
	}

	return [column1, column2]
}
