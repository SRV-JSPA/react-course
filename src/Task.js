import './Task.css'

export function TaskCard({ready}){
    return <div className='card'>
        <h1>Mi primer tarea</h1>
        <span className={ready ? 'green': 'red'}>{ready ? 'tarea realizada' : 'tarea pendiente'}</span>
    </div>
}