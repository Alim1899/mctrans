import Background from '../Background/Background'
import Form from '../Form/Form'
import classes from './Layout.module.css'
export default function Layout() {
  return (
    <div className={classes.main}>
      <Background/>
      <Form/>
    </div>
  )
}
