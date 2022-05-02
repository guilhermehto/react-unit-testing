import './App.css'
import { Card } from './components/Card'

function App() {
	return (
		<div className="flex items-center justify-center h-screen w-screen">
			<Card isLoading={false} title="Title" footer={'footer'}>
				This is content :)
			</Card>
		</div>
	)
}

export default App
