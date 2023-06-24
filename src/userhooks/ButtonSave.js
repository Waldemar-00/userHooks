import useOnline from './onlineHook'
function onSave() {
  console.log('Save data')
}
function onReconnect() {
  console.log('Reconnecting')
}
function Button() {
  const isButton = useOnline()
  const styles = {
    btn: {
      width: '130px',
      height: '30px',
      borderRadius: '4px',
      textAlign: 'center',
      border: '1px solid #175168'
    }
  }
  return (
    <button style={styles.btn} onClick={isButton ? onSave : onReconnect}>
      {isButton ? 'Save data' : 'Reconnecting?'}
    </button>
  )
}
export default Button
