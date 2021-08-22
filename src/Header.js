import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar/>
            </HeaderLeft>

            {/*Header Search*/}

            {/*Header Right*/}
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div``

const HeaderLeft =  styled.div``

const HeaderAvatar = styled(Avatar)``