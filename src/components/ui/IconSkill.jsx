import React from 'react'
import Box from '@mui/material/Box'
import { Stack, SvgIcon } from '@mui/material'
import { logos } from "../Icon.jsx"
import Text from './Text.jsx'

const IconSkill = ({ name }) => {
  return (
    <Stack alignItems="center" sx={{py: {xs: 2, sm: 3, md: 4, } }}>
      <SvgIcon
        inheritViewBox
        fontSize="large"
      >{logos[name]}</SvgIcon>
      <Text sx={{ fontSize: 14, fontWeight: 700 }}>{name}</Text>
    </Stack>
  )
}

export default IconSkill