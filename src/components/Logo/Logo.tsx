import logo from 'assets/logo.svg'

type Props = {}
const Logo = (props: Props) => {
  return (
    <div className="logo" style={{marginTop: '5px'}}>
      <img src={logo} alt="logo" />
    </div>
  )
}
export default Logo