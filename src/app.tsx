import { Button } from './components/ui/button'
import './index.css'

export function App() {
  return (
    <div>
      <Button>Hello world</Button>
      <Button variant='secondary'>Hello world</Button>
      <Button variant='outline'>Hello world</Button>
      <Button variant='ghost'>Hello world</Button>
      <Button variant='destructive'>Hello world</Button>
    </div>
  )
}