import AppBar from '@mui/material/AppBar'

import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/CardHeader/CartHeader'

type Props = {
    cardData: {
      totalCount: number
      totalPrice: number  
    }
}
const Header = ({cardData}: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Logo />
                    </Typography>
                    <Menu />
                    <CartHeader cardData={cardData} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
