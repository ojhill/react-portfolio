import styles from '../styles/about.module.css'

function Board(){
    return <div className={styles.board}>
        <Square value={0}></Square>
        <Square value={1}></Square>
        <Square value={2}></Square>
        <Square value={3}></Square>
        <Square value={4}></Square>
        <Square value={5}></Square>
        <Square value={6}></Square>
        <Square value={7}></Square>
        <Square value={8}></Square>

        </div>
}
function Square({value}){
    return <div className={styles.square}>{value}</div>
}
export default function Home () {
    return <div className={styles.page}>
        <h1>
            Tic Tac Toe Exercise
    </h1>
        <Board></Board>
    </div>
}