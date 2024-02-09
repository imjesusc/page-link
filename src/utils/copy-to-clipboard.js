import toast from 'react-hot-toast'

export const copyToClipboard = async txt => {
	try {
		const clipboardItem = new ClipboardItem({
			'text/plain': new Blob([txt], { type: 'text/plain' })
		})
		await navigator.clipboard.write([clipboardItem])
	} catch (error) {
		await navigator.clipboard.writeText(txt)
	}
	toast.success('Copied to clipboard', {
		icon: '📋'
	})
}
