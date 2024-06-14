const scrollToAnchor = anchorName => {
	if (anchorName) {
		const anchorElement = document.getElementById(anchorName)
		if (anchorElement) {
			anchorElement.scrollIntoView({ behavior: 'smooth' })
		}
	}
}

export default scrollToAnchor