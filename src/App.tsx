import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen">
			<Card isLoading={false} title="Title" footer={<Button>click me</Button>}>
				This is content :)
			</Card>
		</div>
	)
}

export default App
